import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import MaxWidth from '../../components/MaxWidth'
import BackgroundImage from '../../components/BackgroundImage'
import AbsoluteNav from '../../components/AbsoluteNav'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <BackgroundImage src={'/img/blog-index.jpg'} title="Latest stories">
          <AbsoluteNav />
        </BackgroundImage>

        <MaxWidth className="mt-16 pb-8">
          <BlogRoll />
        </MaxWidth>
      </Layout>
    )
  }
}
