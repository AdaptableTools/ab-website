import React from 'react'

import join from '../join'

export default props => {
  return (
    <div
      {...props}
      className={join(props.className, 'px-5 mx-auto max-w-2xl md:max-w-5xl')}
    >
      {props.children}
    </div>
  )
}
