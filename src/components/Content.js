import React from 'react'
import PropTypes from 'prop-types'

import './Content.scss'

export const HTMLContent = ({ content, children, className }) => (
  <div
    className={`${className || ''} ContentCmp ContentCmp--html`}
    dangerouslySetInnerHTML={{ __html: content || children }}
  />
)

const Content = ({ content, className }) => (
  <div className={`${className || ''} ContentCmp`}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
}

HTMLContent.propTypes = Content.propTypes

export default Content
