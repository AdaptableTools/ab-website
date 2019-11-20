import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, children, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: content || children }}
  />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
}

HTMLContent.propTypes = Content.propTypes

export default Content
