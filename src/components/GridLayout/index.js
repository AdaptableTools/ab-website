import React from 'react'

const GridLayout = ({ children, ...props }) => {
  let { minBoxWidth, gridGap, ...domProps } = props

  minBoxWidth = minBoxWidth || 220

  if (typeof minBoxWidth !== 'string') {
    minBoxWidth = `${minBoxWidth}px`
  }

  return (
    <div
      {...domProps}
      style={{
        display: 'grid',
        padding: 20,
        gridGap: gridGap || 20,
        gridTemplateColumns: `repeat(auto-fit, minmax(${minBoxWidth}, 1fr))`,
        ...props.style
      }}
    >
      {children}
    </div>
  )
}

export default GridLayout
