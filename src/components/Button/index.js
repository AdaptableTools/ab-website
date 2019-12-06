import React from 'react'
export default ({ children, tone, className, ...props }) => {
  const dark = tone == 'dark' || !tone
  const toneClass = dark ? ' text-blue-100' : ' text-blue-800'
  return (
    <button
      {...props}
      className={
        (className || '') +
        ' mt-3 self-start rounded-sm p-3 px-6 w-auto ' +
        toneClass
      }
      style={{
        ...props.style,
        background: dark ? 'var(--ab-color-blue)' : 'white'
      }}
    >
      {children}
    </button>
  )
}
