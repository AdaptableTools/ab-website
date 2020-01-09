import React from 'react'

import join from '../join'

export default props => {
  let { pxMobile, ...domProps } = props

  pxMobile = pxMobile || 3
  return (
    <div
      {...domProps}
      className={join(
        domProps.className,
        `w-full px-${pxMobile} md:px-5 mx-auto max-w-2xl md:max-w-6xl`
      )}
    >
      {domProps.children}
    </div>
  )
}
