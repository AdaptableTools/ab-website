import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import BackgroundImage from '../../components/BackgroundImage'
import AbsoluteNav from '../../components/AbsoluteNav'
import MaxWidth from '../../components/MaxWidth'
import Headline from '../../components/Headline'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <AbsoluteNav />
    <Helmet title={`Tags | ${title}`} />
    <BackgroundImage
      image={'/img/index-page.png'}
      title={'Adaptable Tools'}
    ></BackgroundImage>
    <MaxWidth className="mt-16 mb-8">
      <Headline as="h3">Tags</Headline>

      <ul className="taglist">
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </MaxWidth>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
