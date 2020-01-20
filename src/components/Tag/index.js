import React from 'react'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

import './index.scss'

export const TagStyle = {
  background: 'var(--ab-color-blue)',
  color: 'white',
  display: 'inline-block',
  fontSize: 'var(--ab-font-size-3)',

  padding: 'var(--ab-space-1)',
  paddingBottom: '0.5rem',
  paddingLeft: 'var(--ab-space-2)',
  paddingRight: 'var(--ab-space-2)',
  borderRadius: 20,
  marginRight: 'var(--ab-space-3)',
  marginTop: 'var(--ab-space-2)'
}

export default ({ tag, ...props }) => {
  const value = typeof tag === 'string' ? tag : tag.fieldValue
  return (
    <li key={value}>
      <Link style={TagStyle} to={`/tags/${kebabCase(value)}/`}>
        {value} {tag.totalCount != null ? `(${tag.totalCount || 0})` : null}
      </Link>
    </li>
  )
}
