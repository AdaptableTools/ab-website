import React from 'react'
import join from '../join'

const BackgroundImage = ({ src, image, title, ...props }) => (
  <div
    {...props}
    className={join('full-width-image margin-top-0', props.className)}
    style={{
      height: 450,
      maxHeight: '50vh',
      flexFlow: 'column',
      backgroundImage: `url(${
        image && !!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : src || image
      })`,
      backgroundPosition: `top left`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: `fixed`,
      ...props.style
    }}
  >
    {props.children}
    {title ? (
      <h1
        className="text-5xl text-center font-bold"
        style={{
          boxShadow: '0.5rem 0 0 var(--blue), -0.5rem 0 0 var(--blue)',
          backgroundColor: 'var(--blue)',
          color: 'white',
          padding: '1rem'
        }}
      >
        {title}
      </h1>
    ) : null}
  </div>
)

export default BackgroundImage
