import React from 'react'
import join from '../join'

const Strip = ({ variant = 'dark', ...props }) => {
  const style = {
    ...props.style
  }
  if (variant === 'dark') {
    style['--ab-color_text-headline'] = 'white'
    style['--ab-link_text-decoration'] = 'underline'
    style['--ab-link_color'] = 'white'
  }
  return (
    <div
      {...props}
      style={style}
      className={join(props.className, getClassNameForVariant(variant))}
    ></div>
  )
}

export const getClassNameForVariant = (variant = 'dark') => {
  return variant === 'dark' ? 'bg-blue-800 text-white' : 'bg-white ab-text-dark'
}

export default Strip
