import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Video from '../components/Video'
import Content, { HTMLContent } from '../components/Content'
import MaxWidth from '../components/MaxWidth'
import GridLayout from '../components/GridLayout'
import Strip, { getClassNameForVariant } from '../components/Strip'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import AnimateWhenVisible from '../components/AnimateWhenVisible'
import ClientQuotes from '../components/ClientQuotes'
import Button from '../components/Button'
import avatars from '../components/avatars'
import ExternalLink from '../components/ExternalLink'
import Timeline from '../components/Timeline'
import Headline from '../components/Headline'

export const XAdaptablePageTemplate = ({ title }) => {
  return (
    <>
      <BackgroundImage>
        <AbsoluteNav />
      </BackgroundImage>
      {title}
    </>
  )
}

XAdaptablePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  keyfeaturestitle: PropTypes.string,
  description: PropTypes.string,
  contentComponent: PropTypes.func
}

const XAdaptableBlotterPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { fields } = post

  return (
    <Layout>
      <XAdaptablePageTemplate title={post.frontmatter.title} />
    </Layout>
  )
}

XAdaptableBlotterPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default XAdaptableBlotterPage

export const xadaptableBlotterPageQuery = graphql`
  query XAdaptableBlotterPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html

      frontmatter {
        title
      }
    }
  }
`
