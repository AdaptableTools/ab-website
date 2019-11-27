import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar'

let initialBg = 'rgba(255, 255, 255, 0.85)'
let scrolledBg = 'rgba(255, 255, 255, 0.95)'
let maxScrolledBg = 'rgba(255, 255, 255, 1)'

const AbsoluteNav = () => {
  const domRef = useRef()
  useEffect(() => {
    if (!domRef.current || !domRef.current.firstChild) {
      return
    }
    const navbar = domRef.current.firstChild
    if (!domRef.current.parentNode) {
      navbar.style.position = 'absolute'
      return
    }

    const getHeights = () => {
      let height = navbar.offsetHeight

      let parentHeight =
        domRef.current && domRef.current.parentNode
          ? domRef.current.parentNode.offsetHeight
          : 0

      return { height, parentHeight }
    }

    let { height, parentHeight } = getHeights()

    let currentlyVisible = true
    let currentScrollTop = 0

    window.addEventListener('resize', () => {
      const { height: h, parentHeight: ph } = getHeights()

      height = h
      if (ph) {
        parentHeight = ph
      }
    })

    const setNavbarVisible = visible => {
      if (visible == currentlyVisible) {
        return
      }
      currentlyVisible = visible
      navbar.style.opacity = visible ? 1 : 0
    }

    const onScroll = () => {
      const scrollTop = window.scrollY
      const navbarBottom = scrollTop + height
      const maxAllowed = parentHeight - height

      const visible = scrollTop < maxAllowed
      // setNavbarVisible(visible)

      if (visible) {
        if (!!currentScrollTop != !!scrollTop) {
          navbar.style.background = scrollTop ? scrolledBg : initialBg
        }
      } else {
        navbar.style.background = maxScrolledBg
      }
      const transitionPos = visible ? 0 : scrollTop - maxAllowed
      console.log(transitionPos)
      navbar.style.transform = `translate3d(0px, -${transitionPos}px, 0px)`
      currentScrollTop = scrollTop
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })
  return (
    <div className="mb-20" style={{ width: '100%' }} ref={domRef}>
      <Navbar
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          background: initialBg
        }}
        className="bg-white"
      />
    </div>
  )
}

export default AbsoluteNav
