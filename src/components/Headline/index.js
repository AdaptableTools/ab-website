import React from 'react'
import join from '../join'

import './index.scss'

export default React.forwardRef(({ as, ...domProps }, ref) => {
  const Cmp = as || 'h3'
  return (
    <Cmp
      {...domProps}
      ref={ref}
      className={join(
        domProps.className,
        'text-3xl  md:text-5xl font-thin Headline'
      )}
    />
  )
})
