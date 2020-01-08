import React from 'react'
import join from '../join'
import PageTitle from '../PageTitle'

import './index.scss'

const BackgroundImage = ({ src, image, title, ...props }) => (
  <>
    <div
      {...props}
      className={join('BackgroundImage margin-top-0', props.className)}
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
        backgroundAttachment: `initial`,
        ...props.style
      }}
    >
      {props.children}
    </div>
    {title ? <PageTitle title={title} /> : null}
  </>
)

export default BackgroundImage
