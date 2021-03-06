import React, { PropTypes } from 'react'
import classNames from 'classnames'

import {
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useWidthProp,
  useKeyOnly,
  customPropTypes,
} from '../../lib'

/**
 * A set of fields can appear grouped together
 * @see Form
 */
function FormGroup(props) {
  const { children, className, grouped, inline, widths } = props

  const classes = classNames(
    useWidthProp(widths, null, true),
    useKeyOnly(inline, 'inline'),
    useKeyOnly(grouped, 'grouped'),
    'fields',
    className,
  )
  const rest = getUnhandledProps(FormGroup, props)
  const ElementType = getElementType(FormGroup, props)
  return (
    <ElementType {...rest} className={classes}>
      {children}
    </ElementType>
  )
}

FormGroup._meta = {
  name: 'FormGroup',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
  props: {
    widths: [...SUI.WIDTHS, 'equal'],
  },
}

FormGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content.  Intended to be Form Fields. */
  children: PropTypes.node,

  /** Additional classes */
  className: PropTypes.string,

  /** Fields can show related choices */
  grouped: customPropTypes.every([
    customPropTypes.disallow(['inline']),
    PropTypes.bool,
  ]),

  /** Multiple fields may be inline in a row */
  inline: customPropTypes.every([
    customPropTypes.disallow(['grouped']),
    PropTypes.bool,
  ]),

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width */
  widths: PropTypes.oneOf(FormGroup._meta.props.widths),
}

FormGroup.defaultProps = {
  as: 'div',
}

export default FormGroup
