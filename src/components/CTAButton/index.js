import React from 'react'

import { HTMLContent } from '../Content'
import Button from '../Button'
import ExternalLink from '../ExternalLink'

import { Link } from 'gatsby'

import './index.scss'

export default ({ children, href, style, ...props }) => {
  const hasLink = href && typeof href === 'string'
  const btn = (
    <HTMLContent
      {...props}
      style={hasLink ? null : style}
      className={`${props.className || ''} CTAButton mt-6 text-2xl md:text-3xl`}
      as={Button}
    >
      {children}
    </HTMLContent>
  )

  if (hasLink) {
    const external = href.indexOf('http') === 0
    const LinkCmp = external ? ExternalLink : Link
    const extraProps = external ? { href } : { to: href }
    return (
      <LinkCmp
        {...props}
        {...extraProps}
        className={`${props.className || ''} CTAButton`}
        style={{ color: 'inherit', ...style }}
      >
        {btn}
      </LinkCmp>
    )
  }

  return btn
}
