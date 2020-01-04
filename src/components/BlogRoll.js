import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import GridLayout from './GridLayout'
import Button from './Button'
import AnimateWhenVisible from './AnimateWhenVisible'

export class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <GridLayout minBoxWidth="20rem">
        {posts &&
          posts.map(({ node: post }, i) => (
            <AnimateWhenVisible key={post.id} animationDelay={`0.${i}s`}>
              <article
                className={`p-6 rounded`}
                style={{
                  margin: 0,
                  boxShadow:
                    '0 0.5em 1em -0.125em rgba(101, 101, 101, 0.1), 0 0px 0 1px rgba(101, 101, 101, 0.02)',
                  backgroundColor: post.frontmatter.featuredpost
                    ? '#c5d6ff33'
                    : '#f5f5f5'
                }}
              >
                <header
                  style={{
                    marginBottom: '1rem'
                  }}
                >
                  {post.frontmatter.featuredimage ? (
                    <div className="mb-4">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p>
                    <Link
                      className="text-2xl text-blue-600 hover:text-blue-600 hover:underline"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="text-base">{post.frontmatter.date}</span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link to={post.fields.slug}>
                    <Button>Keep Reading →</Button>
                  </Link>
                </p>
              </article>
            </AnimateWhenVisible>
          ))}
      </GridLayout>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              tags: { nin: ["gridgurus"] }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 320, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
