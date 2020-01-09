import React from 'react'

const GridLayout = ({ children, ...props }) => {
  let { minBoxWidth, gridGap, ...domProps } = props

  const [computedBoxWidth, setComputedBoxWidth] = React.useState(0)
  const [maxBoxWidth, setMaxBoxWidth] = React.useState('1fr')

  const domRef = React.useRef(null)

  minBoxWidth = computedBoxWidth || minBoxWidth || 220

  if (typeof minBoxWidth !== 'string') {
    minBoxWidth = `${minBoxWidth}px`
  }

  React.useEffect(() => {
    const node = domRef.current

    if (node && node.firstChild) {
      if (node.firstChild.offsetWidth > window.innerWidth - 20) {
        // setComputedBoxWidth('80vw')
        setMaxBoxWidth('80vw')
      }
    }
  }, [])

  return (
    <div
      {...domProps}
      ref={domRef}
      data-computed={computedBoxWidth}
      style={{
        display: 'grid',
        padding: 20,
        gridGap: gridGap || 20,
        gridTemplateColumns: `repeat(auto-fit, minmax(${minBoxWidth}, ${maxBoxWidth}))`,
        ...props.style
      }}
    >
      {children}
    </div>
  )
}

export default GridLayout
