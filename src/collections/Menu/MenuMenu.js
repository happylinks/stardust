import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function MenuMenu(props) {
  const { children, className, position } = props
  const classes = cx(className, position, 'menu')
  const ElementType = getElementType(MenuMenu, props)
  const rest = getUnhandledProps(MenuMenu, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

MenuMenu._meta = {
  name: 'MenuMenu',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
  props: {
    position: ['right'],
  },
}

MenuMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the MenuMenu. */
  children: PropTypes.node,

  /** Classes that will be added to the MenuMenu className. */
  className: PropTypes.string,

  /** A sub menu can take right position. */
  position: PropTypes.oneOf(MenuMenu._meta.props.position),
}

export default MenuMenu
