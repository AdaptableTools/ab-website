import React from 'react'
import Layout from '../components/Layout'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import MaxWidth from '../components/MaxWidth'

const NotFoundPage = () => (
  <Layout>
    <AbsoluteNav />
    <BackgroundImage
      image={'/img/index-page.png'}
      title={'Adaptable Tools'}
    ></BackgroundImage>

    <MaxWidth className="mt-16 mb-8">
      <p>Page not found, sorry.</p>
    </MaxWidth>
  </Layout>
)

export default NotFoundPage
