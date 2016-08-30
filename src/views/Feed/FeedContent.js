import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FeedDate from './FeedDate'
import FeedExtra from './FeedExtra'
import FeedMeta from './FeedMeta'
import FeedSummary from './FeedSummary'

function FeedContent(props) {
  const { children, className, extraImages, extraText, date, meta, summary } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(FeedContent, props)
  const ElementType = getElementType(FeedContent, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {date && <FeedDate content={date} />}
      {summary && <FeedSummary content={summary} />}
      {extraText && <FeedExtra text={extraText} />}
      {extraImages && <FeedExtra images={extraImages} />}
      {meta && <FeedMeta content={meta} />}
    </ElementType>
  )
}

FeedContent._meta = {
  name: 'FeedContent',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the FeedContent. */
  children: customPropTypes.every([
    customPropTypes.disallow([
      'date',
      'extraImages',
      'extraText',
      'meta',
      'summary',
    ]),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedContent className. */
  className: PropTypes.string,

  /** Deprecated. Use date, extraText, extraImages, meta, and summary instead. */
  content: customPropTypes.deprecate('Use date, extraText, extraImages, meta, and summary instead.'),

  /** An event can contain a date. */
  date: FeedDate.propTypes.content,

  /** Shorthand for FeedExtra with prop images. */
  extraImages: FeedExtra.propTypes.images,

  /** Shorthand for FeedExtra with prop text. */
  extraText: FeedExtra.propTypes.text,

  /** Shorthand for FeedMeta. */
  meta: FeedMeta.propTypes.content,

  /** Shorthand for FeedSummary. */
  summary: FeedSummary.propTypes.content,
}

export default FeedContent
