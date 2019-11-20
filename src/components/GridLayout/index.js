import React from 'react'

const GridLayout = ({ children, ...props }) => {
  const minBoxWidth = props.minBoxWidth || 220

  return (
    <div
      {...props}
      style={{
        display: 'grid',
        padding: 20,
        gridGap: 20,
        gridTemplateColumns: `repeat(auto-fit, minmax(${minBoxWidth}px, 1fr))`,
        ...props.style
      }}
    >
      {children}
    </div>
  )
}

export default GridLayout
