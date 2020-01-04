import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
// import { ThemeProvider } from 'emotion-theming'

import theme from './theme'
import Footer from './Footer'

import './index.scss'

import useSiteMetadata from './SiteMetadata'

const colors = Object.keys(theme.colors).reduce((acc, key) => {
  const value = theme.colors[key]

  acc[`--${key}`] = value

  return acc
}, {})

export const PreviewTemplateWrapper = ({
  footer,
  children,
  title,
  description
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexFlow: 'column', flex: 1, ...colors }}>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <div style={{ flex: 1 }}>{children}</div>
        {footer}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </div>
    </ThemeProvider>
  )
}

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <PreviewTemplateWrapper
      title={title}
      description={description}
      footer={<Footer />}
    >
      {children}
    </PreviewTemplateWrapper>
  )
}

export default TemplateWrapper
