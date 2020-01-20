import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AbsoluteNav from '../components/AbsoluteNav'
import MaxWidth from '../components/MaxWidth'
import Tag from '../components/Tag'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent } from '../components/Content'

import Headline from '../components/Headline'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,

  featuredimage,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      <AbsoluteNav inplace />

      <MaxWidth>
        <section>
          {helmet || ''}
          <div className="container">
            <div className="columns">
              <div className="">
                <Headline as="h1" className="text-blue-800 mb-10">
                  {title}
                </Headline>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredimage
                  }}
                />
                <p className=" mt-5 mb-8 text-base">{description}</p>
                <PostContent content={content} className="my-12" />
                {tags && tags.length ? (
                  <div className="my-4">
                    <h4 className="mb-2">Tags</h4>
                    <ul className="taglist">
                      {tags.map(tag => (
                        <Tag
                          key={tag + `tag`}
                          tag={tag}
                        />
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </MaxWidth>
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`
