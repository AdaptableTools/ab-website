import React from 'react'
import join from '../join'

export default React.forwardRef(({ as, ...domProps }, ref) => {
  const Cmp = as || 'h3'
  return (
    <Cmp
      {...domProps}
      ref={ref}
      className={join(domProps.className, 'text-5xl font-thin')}
    />
  )
})
