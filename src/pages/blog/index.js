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
        <BackgroundImage src={'/img/blog-index.jpg'}>
          <AbsoluteNav />
          <h1
            className="text-5xl text-center font-bold"
            style={{
              boxShadow: '0.5rem 0 0 var(--blue), -0.5rem 0 0 var(--blue)',
              backgroundColor: 'var(--blue)',
              color: 'white',
              padding: '1rem'
            }}
          >
            Latest Stories
          </h1>
        </BackgroundImage>

        <MaxWidth className="mt-16 pb-8">
          <BlogRoll />
        </MaxWidth>
      </Layout>
    )
  }
}
