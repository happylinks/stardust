import _ from 'lodash'
import cx from 'classnames'
import React, { isValidElement } from 'react'

/**
 * Merges props and classNames.
 *
 * @param {object} defaultProps A props object
 * @param {object} props A props object
 * @returns {object} A new props object
 */
const mergePropsAndClassName = (defaultProps, props) => {
  const { childKey, ...newProps } = { ...defaultProps, ...props }

  if (_.has(props, 'className') || _.has(defaultProps.className)) {
    newProps.className = cx(defaultProps.className, props.className) // eslint-disable-line react/prop-types
  }

  if (!newProps.key) {
    newProps.key = _.isFunction(childKey) ? childKey(newProps) : childKey
  }

  return newProps
}

/**
 * A more robust React.createElement.
 * It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {object|function} [defaultProps={}] Default props object or function (called with regular props).
 * @returns {function|null}
 */
export function createShorthand(Component, mapValueToProps, val, defaultProps = {}) {
  // short circuit for disabling shorthand
  if (val === null) return null

  let type
  let usersProps = {}

  if (isValidElement(val)) {
    type = 'element'
    usersProps = val.props
  } else if (_.isPlainObject(val)) {
    type = 'props'
    usersProps = val
  } else if (_.isString(val) || _.isNumber(val)) {
    type = 'literal'
    usersProps = mapValueToProps(val)
  }

  defaultProps = _.isFunction(defaultProps) ? defaultProps(usersProps) : defaultProps
  const props = mergePropsAndClassName(defaultProps, usersProps)

  // Clone ReactElements
  if (type === 'element') {
    return React.cloneElement(val, props)
  }

  // Create ReactElements from props objects
  // Map values to props and create a ReactElement
  if (type === 'props' || type === 'literal') {
    return <Component {...props} />
  }

  // Otherwise null
  return null
}

export function createShorthandFactory(Component, mapValueToProps) {
  return _.partial(createShorthand, Component, mapValueToProps)
}

// ----------------------------------------
// HTML Factories
// ----------------------------------------
export const createHTMLImage = createShorthandFactory('img', value => ({ src: value }))
export const createHTMLInput = createShorthandFactory('input', value => ({ type: value }))
