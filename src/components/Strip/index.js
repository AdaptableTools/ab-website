import React from 'react'
import join from '../join'

const Strip = ({ variant = 'dark', ...props }) => {
  return (
    <div
      {...props}
      className={join(props.className, getClassNameForVariant(variant))}
    ></div>
  )
}

export const getClassNameForVariant = (variant = 'dark') => {
  return variant === 'dark'
    ? 'bg-blue-800 text-white'
    : 'bg-white app-text-dark'
}

export default Strip
