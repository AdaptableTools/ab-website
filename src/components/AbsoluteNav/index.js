import React, { useLayoutEffect, useEffect, useRef } from 'react'
import Navbar from '../Navbar'

let initialBg = 'rgba(255, 255, 255, 0.95)'
let scrolledBg = 'rgba(255, 255, 255, 0.95)'
let maxScrolledBg = 'rgba(255, 255, 255, 1)'

const AbsoluteNav = ({ inplace }) => {
  const domRef = useRef()
  // useLayoutEffect(() => {
  //   if (inplace) {
  //     return
  //   }
  //   if (!domRef.current || !domRef.current.firstChild) {
  //     return
  //   }

  //   if (!domRef.current.parentNode) {
  //     // navbar.style.position = 'absolute'
  //     return
  //   }
  //   const navbar = domRef.current.firstChild

  //   const getHeights = () => {
  //     let height = navbar.offsetHeight

  //     let backgroundImageHeight =
  //       domRef.current && domRef.current.nextSibling
  //         ? domRef.current.nextSibling.offsetHeight
  //         : 0

  //     return { height, backgroundImageHeight: backgroundImageHeight + height }
  //   }

  //   let { height, backgroundImageHeight } = getHeights()

  //   if (!domRef.current || !domRef.current.style) {
  //     return
  //   }

  //   domRef.current.style.height = `${height}px`
  //   navbar.style.position = 'fixed'

  //   let currentScrollTop = 0

  //   const onResize = () => {
  //     const { height: h, backgroundImageHeight: ph } = getHeights()

  //     height = h
  //     domRef.current.style.height = `${height}px`
  //     domRef.current.firstChild.style.position = 'fixed'
  //     if (ph) {
  //       backgroundImageHeight = ph
  //     }
  //   }
  //   window.addEventListener('resize', onResize)

  //   const onScroll = () => {
  //     const scrollTop = window.scrollY
  //     const maxAllowed = backgroundImageHeight - height

  //     const visible = scrollTop < maxAllowed

  //     if (visible) {
  //       if (!!currentScrollTop != !!scrollTop) {
  //         navbar.style.background = scrollTop ? scrolledBg : initialBg
  //       }
  //     } else {
  //       navbar.style.background = maxScrolledBg
  //     }
  //     const transitionPos = visible ? 0 : scrollTop - maxAllowed

  //     navbar.style.transform = `translate3d(0px, -${transitionPos}px, 0px)`
  //     currentScrollTop = scrollTop
  //   }
  //   window.addEventListener('scroll', onScroll)

  //   return () => {
  //     window.removeEventListener('scroll', onScroll)
  //     window.removeEventListener('resize', onResize)
  //   }
  // })
  return (
    <div
      style={{ position: 'sticky', top: 0, width: '100%', zIndex: 1000 }}
      className={inplace ? '' : ''}
      ref={domRef}
    >
      <Navbar
        style={{
          position: 'relative',
          top: 0,
          width: '100%',
          zIndex: 1000,
          background: initialBg,
        }}
        className="bg-white"
      />
    </div>
  )
}

export default AbsoluteNav
