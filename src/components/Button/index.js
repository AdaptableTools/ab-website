import React from 'react'
export default ({ children, className, ...props }) => (
  <button
    {...props}
    className={
      (className || '') +
      ' mt-3 self-start rounded-sm p-3 px-6 w-auto bg-blue-700 text-blue-100 '
    }
  >
    {children}
  </button>
)
