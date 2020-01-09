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
      <GridLayout minBoxWidth="16rem">
        {posts &&
          posts.map(({ node: post }, i) => (
            <AnimateWhenVisible key={post.id} animationDelay={`0.${i}s`}>
              <article
                className={`p-6 rounded`}
                style={{
                  height: '100%',
                  margin: 0,
                  boxShadow:
                    '0 0.5em 1em -0.125em rgba(101, 101, 101, 0.1), 0 0px 0 1px rgba(101, 101, 101, 0.02)',
                  backgroundColor: '#c5d6ff33',
                  display: 'flex',
                  flexFlow: 'column'
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

                    <div className="text-base">{post.frontmatter.date}</div>
                  </p>
                </header>

                {post.excerpt}
                <br />
                <br />

                <div style={{ flex: 1 }}></div>
                <Link to={post.fields.slug}>
                  <Button>Keep Reading →</Button>
                </Link>
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
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 80) {
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
