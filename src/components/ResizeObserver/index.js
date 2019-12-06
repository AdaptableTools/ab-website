import React from 'react'
import { useMemo, useRef, useEffect, useLayoutEffect } from 'react'

import ResizeObserverPoly from 'resize-observer-polyfill'

const setupResizeObserver = (node, callback) => {
  const RO = window.ResizeObserver || ResizeObserverPoly

  const observer = new RO(entries => {
    const entry = entries[0]
    const { width, height } = entry.contentRect

    callback({ width, height })
  })

  observer.observe(node, 'border-box')

  return () => {
    observer.disconnect()
  }
}

/**
 * A hook that notifies you when a certain DOM element has changed it's size
 *
 * @param ref A React ref to a DOM element
 * @param callback The function to be called when the element is resized.
 */
export const useResizeObserver = (ref, callback, config = {}) => {
  const sizeRef = useRef({
    width: 0,
    height: 0
  })

  const effectFn = () => {
    let disconnect
    if (ref.current) {
      disconnect = setupResizeObserver(ref.current, size => {
        const prevSize = sizeRef.current
        if (prevSize.width !== size.width || prevSize.height !== size.height) {
          sizeRef.current = size
          callback(size)
        }
      })
    }
    return () => {
      if (disconnect) {
        disconnect()
      }
    }
  }

  useEffect(() => {
    if (!config.earlyAttach) {
      return effectFn()
    }
    return () => {}
  }, [ref.current, ref, callback, config.earlyAttach])

  useLayoutEffect(() => {
    if (config.earlyAttach) {
      return effectFn()
    }
    return () => {}
  }, [ref.current, ref, callback, config.earlyAttach])
}

const ReactResizeObserver = props => {
  const style = useMemo(
    () => ({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      boxSizing: 'border-box'
    }),
    []
  )

  const { notifyOnMount, earlyAttach } = props

  const firstTime = useRef(true)
  const ref = useRef(null)

  const onResize = size => {
    if (firstTime.current && !notifyOnMount) {
      firstTime.current = false
      return
    }
    props.onResize(size)
  }

  useResizeObserver(ref, onResize, { earlyAttach: earlyAttach || false })

  return <div ref={ref} style={style}></div>
}

ReactResizeObserver.defaultProps = {
  notifyOnMount: true,
  earlyAttach: false
}

export default ReactResizeObserver
