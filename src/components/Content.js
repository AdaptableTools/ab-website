import React from 'react'
import PropTypes from 'prop-types'

import marked from 'marked'

import './Content.scss'

export const HTMLContent = ({
  as,
  content,
  children,
  className,
  style,
  markdown = true
}) => {
  className = `${className || ''} ContentCmp ContentCmp--html`

  content = content || children
  if (markdown && content && typeof content === 'string') {
    content = marked(content)
  }
  const Cmp = as || 'div'
  return (
    <Cmp style={style} className={className} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

const Content = ({
  as = 'div',
  content,
  className,
  markdown = true,
  style
}) => {
  const Cmp = as || 'div'
  return (
    <Cmp className={`${className || ''} ContentCmp`} style={style}>
      {markdown && content && typeof content === 'string'
        ? marked(content)
        : content}
    </Cmp>
  )
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
}

HTMLContent.propTypes = Content.propTypes

export default Content
