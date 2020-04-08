import React from 'react'
import join from '../join'
import AnimateWhenVisible from '../AnimateWhenVisible'

export default ({ title, className, style, animate = true, as = 'h1' }) => {
  className = join(
    className,
    'text-2xl text-center md:text-4xl p-3 md:p-4 shadow-lg text-white'
  )
  style = {
    ...style,
    // position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'var(--ab-color-blue)',
  }

  return (
    <div className={className} style={style}>
      <AnimateWhenVisible
        animationName="enter-from-left"
        animationDuration="0.7s"
      >
        {title}
      </AnimateWhenVisible>
    </div>
  )
}
