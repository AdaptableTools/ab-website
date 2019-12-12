import React from 'react'
import join from '../join'
import PageTitle from '../PageTitle'

const BackgroundImage = ({ src, image, title, ...props }) => (
  <div
    {...props}
    className={join('full-width-image margin-top-0', props.className)}
    style={{
      height: 550,
      maxHeight: '55vh',
      minHeight: 380,
      flexFlow: 'column',
      justifyContent: 'center',
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
    {title ? <PageTitle title={title} /> : null}
  </div>
)

export default BackgroundImage
