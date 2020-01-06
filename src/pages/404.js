import React from 'react'
import Layout from '../components/Layout'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import MaxWidth from '../components/MaxWidth'

const NotFoundPage = () => (
  <Layout>
    <BackgroundImage image={'/img/blog-index.jpg'} title={'Adaptable Tools'}>
      <AbsoluteNav />
    </BackgroundImage>

    <MaxWidth>
      <p>Page not found, sorry.</p>
    </MaxWidth>
  </Layout>
)

export default NotFoundPage
