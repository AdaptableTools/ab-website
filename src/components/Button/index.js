import React from 'react'
export default ({ children, tone, className, ...props }) => {
  const toneClass =
    tone == 'dark' || !tone
      ? 'bg-blue-700 text-blue-100'
      : 'bg-white text-blue-800'
  return (
    <button
      {...props}
      className={
        (className || '') +
        ' mt-3 self-start rounded-sm p-3 px-6 w-auto ' +
        toneClass
      }
    >
      {children}
    </button>
  )
}
