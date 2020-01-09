import React from 'react'
import AnimateWhenVisible from '../AnimateWhenVisible'

const width = 5

const darkTextColor = 'var(--ab-color-text)'
const lightTextColor = 'white'

export default ({
  steps,
  withAnimation = true,
  variant = 'dark',
  darkColor = 'var(--ab-color-blue)',
  space = 20,
  stepStyle,
  ...domProps
}) => {
  return (
    <div
      {...domProps}
      style={{
        position: 'relative',
        display: 'inline-flex',
        flexFlow: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        color: variant == 'dark' ? darkTextColor : lightTextColor,

        ...domProps.style
      }}
    >
      <div
        style={{
          position: 'absolute',

          left: '50%',
          transform: `translate3d(-${width}px, 0px, 0px)`,
          '-webkit-font-smoothing': 'antialiased',
          top: 0,
          bottom: 0,
          width,
          background: variant == 'dark' ? darkColor : lightTextColor,
          color: variant == 'dark' ? lightTextColor : darkTextColor
        }}
        className=""
      ></div>
      {steps.map((step, i) => {
        i++
        const style = {
          webkitFontSmoothing: 'antialiased',
          fontSmoothing: 'antialiased',
          position: 'relative',
          width: '100%',
          // display: 'inline-block',
          // [i % 2 ? 'marginLeft' : 'marginRight']: 40,
          // transform: `translate3d(${i % 2 ? '50%' : '-50%'}, 0px, 0px)`,

          paddingTop: space,
          paddingBottom: space,
          ...stepStyle
        }
        if (i % 2) {
          style.paddingLeft = 'calc(50% + 20px)'
        } else {
          style.width = 'calc(50% - 20px)'
          //   [i % 2 ? 'marginLeft' : 'marginRight']: `calc(50% + 20px)`,
        }

        const styleNoTransform = {
          ...style,
          visibility: 'hidden'
        }
        delete styleNoTransform.transform

        const dotStyle = {
          // [i % 2 ? 'margin-right' : 'margin-left']: 20,
          borderRadius: '50%',
          border: `${width}px solid ${
            variant == 'dark' ? darkColor : lightTextColor
          }`,
          background: variant == 'dark' ? 'white' : darkColor,

          position: 'absolute',
          height: 30,
          width: 30,
          top: '50%',
          marginTop: -14,
          [i % 2 ? 'left' : 'right']: i % 2 ? -37 : -33
        }
        if (i % 2) {
          dotStyle.marginLeft = 'calc(50% + 20px)'
        }
        const Cmp = withAnimation ? AnimateWhenVisible : 'div'
        return (
          <>
            <Cmp
              style={{
                position: 'relative',
                width: '100%',
                animationDuration: '1s'
              }}
              animationDelay={`${i * 300 + 300}ms`}
              animationName={!(i % 2) ? 'enter-from-left' : 'enter-from-right'}
            >
              <div style={style} key={i}>
                <div style={dotStyle}></div>
                {step}
              </div>
            </Cmp>
          </>
        )
      })}
    </div>
  )
}
