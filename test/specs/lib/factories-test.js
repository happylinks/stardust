import _ from 'lodash'
import React, { isValidElement } from 'react'

import {
  createHTMLImage,
  createShorthand,
  createShorthandFactory,
} from 'src/lib'

import {
  Icon,
  Image,
  Label,
} from 'src/elements'

const _createsValidElements = (factory, value) => {
  it('creates valid elements', () => {
    isValidElement(factory(value)).should.equal(true)
  })
}

const _mapsValueToProps = (factory, value, expectedProps) => {
  it('maps the value to the specified prop', () => {
    _.each(expectedProps, (val, key) => {
      shallow(factory(value)).should.have.prop(key, val)
    })
  })
}

const _mergesProps = (factory, value) => {
  it('merges additional props', () => {
    const wrapper = shallow(factory(value, { 'data-extra': true }))
    wrapper.should.have.className('base')
    wrapper.should.have.prop('data-mapped', value)
    wrapper.should.have.prop('data-extra', true)
  })
}

const _mergesClassName = (factory, value, baseClassName) => {
  it('merges className', () => {
    const className = 'extra-class-name'

    shallow(factory(value, { className }))
      .should.have.className(className)
      .and.have.className(baseClassName)
  })
}

describe.only('factories', () => {
  const assertFactory = (factory, value, props) => {
    const wrapper = shallow(factory(value))

    _.each(props, (propValue, propName) => {
      if (propName === 'className') {
        _.each(propValue.split(' '), className => {
          wrapper.should.have.className(className)
        })
      } else {
        wrapper.should.have.prop(propName, propValue)
      }
    })
  }

  describe('createShorthandFactory', () => {
    it('is a function', () => {
      createShorthandFactory.should.be.a('function')
    })
    it('returns a function', () => {
      createShorthandFactory().should.be.a('function')
    })

    describe('HTML factory', () => {
      const className = 'base'
      const factory = createShorthandFactory('div', val => ({ 'data-mapped': val, className }))

      describe('from a string', () => {
        const value = 'foo'

        _createsValidElements(factory, value)
        _mapsValueToProps(factory, value, { 'data-mapped': value, className })
        _mergesProps(factory, value)
        _mergesClassName(factory, value, className)
      })

      describe('from a props object', () => {
        const value = { 'data-prop': 'prop value' }

        _createsValidElements(factory, value)
        _mapsValueToProps(factory, value, value)
        _mergesProps(factory, value)
        _mergesClassName(factory, value, className)
      })
    })
  })

  describe('createHTMLImage', () => {
    const expectedProps = { src: 'foo' }

    it('crates a img from a string', () => {
      shallow(createHTMLImage('string'))
        .should.have.tagName('img')
    })
    it('maps strings to the `src` prop', () => {
      const src = 'foo.png'
      shallow(createHTMLImage(src))
        .should.have.prop('src', src)
    })
    describe('defaultProps', () => {
      it('are spread', () => {
        const src = 'foo.png'
        const alt = 'my pic'
        const wrapper = shallow(createHTMLImage(src, { alt }))

        wrapper.should.have.prop('src', src)
        wrapper.should.have.prop('alt', alt)
      })
      it('can be overridden', () => {

      })
      it('creates an element', () => {
        const src = 'foo.png'
        shallow(createHTMLImage(undefined, { src }))
          .should.have.prop('src', src)
      })
    })

    it('crates a img from an object', () => {
      assertFactory(createHTMLImage, { src: 'foo' }, expectedProps)
    })
    it('crates a img from a img element', () => {
      assertFactory(createHTMLImage, <img src='foo' />, expectedProps)
    })
  })
})
