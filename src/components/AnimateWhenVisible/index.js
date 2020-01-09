import React from 'react'

import './index.scss'

const THRESHOLD = 500
const AnimateWhenVisible = props => {
  let {
    as,
    style,
    threshold,
    debug,
    animationName: _,
    animationDelay: __,
    animationDuration: ___,
    className,
    ...domProps
  } = props
  const Cmp = as || 'div'
  threshold = threshold || 0.2

  const domRef = React.useRef(null)

  React.useLayoutEffect(() => {
    let observer
    if (window.IntersectionObserver && window.innerWidth > THRESHOLD) {
      domRef.current.classList.add('AnimateWhenVisible')

      observer = new IntersectionObserver(
        entries => {
          const entry = entries[0]
          if (entry && entry.intersectionRatio > threshold && domRef.current) {
            domRef.current.classList.add('Start')
          }
        },
        {
          root: null,
          threshold
        }
      )

      observer.observe(domRef.current)
    } else {
      domRef.current.classList.remove('AnimateCmpOpacity0')
      domRef.current.style.opacity = 1
    }

    return () => {}
  }, [])

  const animationDelay = props.animationDelay || '0.2s'
  const animationName = props.animationName || 'animate-when-visible'
  return (
    <Cmp
      ref={domRef}
      className={`${className || ''} AnimateCmpOpacity0`}
      {...domProps}
      style={{ ...style, animationDelay, animationName }}
    />
  )
}

export default AnimateWhenVisible
