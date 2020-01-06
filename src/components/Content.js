import React from 'react'
import PropTypes from 'prop-types'

import marked from 'marked'

import './Content.scss'

export const HTMLContent = ({
  as,
  content,
  children,
  className,
  markdown = true
}) => {
  className = `${className || ''} ContentCmp ContentCmp--html`

  content = content || children
  if (markdown) {
    content = marked(content)
  }
  const Cmp = as || 'div'
  return (
    <Cmp className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

const Content = ({ as = 'div', content, className, markdown = true }) => {
  const Cmp = as || 'div'
  return (
    <Cmp className={`${className || ''} ContentCmp`}>
      {markdown ? marked(content) : content}
    </Cmp>
  )
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
}

HTMLContent.propTypes = Content.propTypes

export default Content
