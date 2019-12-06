import React, { useRef, useState } from 'react'
import { useResizeObserver } from '../ResizeObserver'
import join from '../join'

export default ({ src, className, ...domProps }) => {
  const domRef = useRef()
  const [size, setSize] = useState({
    width: 640,
    height: 320
  })
  useResizeObserver(
    domRef,
    size => {
      setSize(size)
    },
    {
      earlyAttach: true
    }
  )
  return (
    <div {...domProps} className={join('ratio-16-9', className)} ref={domRef}>
      {size ? (
        <div className="content">
          <iframe
            width={size.width}
            height={size.height}
            src={src}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ) : null}
    </div>
  )
}
