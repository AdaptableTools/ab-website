import React from 'react'
import join from '../join'
import AnimateWhenVisible from '../AnimateWhenVisible'

export default ({ title, className, style, animate = true, as = 'h1' }) => {
  className = join(
    className,
    'text-2xl text-center md:text-4xl p-3 md:p-4 rounded-tr rounded-tl  shadow-lg text-white'
  )
  style = {
    ...style,
    background: 'var(--ab-color-blue)'
  }

  const Cmp = as

  return animate ? (
    <AnimateWhenVisible
      animationName="enter-from-left"
      className={className}
      style={style}
      as={Cmp}
    >
      {title}
    </AnimateWhenVisible>
  ) : (
    <Cmp className={className} style={style}></Cmp>
  )
}
