import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'

export const TestPageTemplate = ({ title }) => {
  return (
    <>
      <BackgroundImage>
        <AbsoluteNav />
      </BackgroundImage>
      {title}
    </>
  )
}

TestPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const TestPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TestPageTemplate title={post.frontmatter.title} />
    </Layout>
  )
}

TestPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default TestPage

export const testPageQuery = graphql`
  query testPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html

      frontmatter {
        title
      }
    }
  }
`
