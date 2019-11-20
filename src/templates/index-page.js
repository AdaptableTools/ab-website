import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Box } from 'rebass'

import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import MaxWidth from '../components/MaxWidth'
import GridLayout from '../components/GridLayout'
import ClientQuotes from '../components/ClientQuotes'
import Awards from '../components/Awards'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  highlights,
  quotes,
  awards,
  mainpitch,
  intro
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundSize: 'contain',
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column'
        }}
      >
        <h1 className="text-3xl text-center md:text-4xl p-4 text-blue-900 rounded-tr rounded-tl bg-blue-100 opacity-75 shadow-lg">
          {title}
        </h1>
        <h3
          style={{ marginRight: 0 }}
          className=" font-thin italic inline-block self-end text-right text-xl md:text-3xl p-4 text-blue-900 rounded-br rounded-bl bg-blue-100 opacity-75 shadow-lg"
        >
          <HTMLContent>{subtitle}</HTMLContent>
        </h3>
      </div>
    </div>

    <MaxWidth className="mt-16">
      <h1 className="text-5xl font-thin  text-blue-800">{mainpitch.title}</h1>
      <p className="mt-10 text-xl">
        <HTMLContent>{mainpitch.description}</HTMLContent>
      </p>
    </MaxWidth>

    <div className="bg-blue-800">
      <MaxWidth className="mt-16 pb-8">
        <GridLayout>
          {highlights.map(highlight => {
            return (
              <div key={highlight.text} className="p-4  ">
                <div className="p-16">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: highlight.image
                    }}
                  />
                </div>
                <p className="text-center mt-4 text-xl font-normal text-white">
                  {highlight.text}
                </p>
              </div>
            )
          })}
        </GridLayout>
      </MaxWidth>
    </div>

    <MaxWidth className="mt-16">
      <h1 className="text-5xl font-thin  text-blue-800">
        What some of our partners are saying
      </h1>
      <p className="my-16">
        Adaptable Tools works with global banks, software houses, cutting-edge
        start-ups, and other Financial Services clients around the world. We aim
        to exceed expectations every time and to partner with clients to help
        them succeed.
      </p>
      <ClientQuotes quotes={quotes} />
    </MaxWidth>

    <div className="bg-blue-800">
      <MaxWidth className="mt-16 pt-16">
        <h1 className="text-5xl font-thin  text-white">Awards</h1>
        <Awards awards={awards} />
      </MaxWidth>
    </div>

    <MaxWidth className="mt-16">
      <h1 className="text-5xl font-thin  text-blue-800">Latest stories</h1>

      <BlogRoll />
    </MaxWidth>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  console.log(data)
  const { frontmatter, fields } = data.markdownRemark
  console.log(frontmatter)

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subtitle={frontmatter.subtitle}
        highlights={frontmatter.highlights}
        quotes={frontmatter.quotes}
        awards={frontmatter.awards || []}
        mainpitch={{
          ...frontmatter.mainpitch,
          description: fields.frontmattermd.mainpitch_description
            ? fields.frontmattermd.mainpitch_description.html
            : ''
        }}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

// fields {
//   frontmattermd {
//     mainpitch_description {
//       html
//     }
//   }
// }
export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      fields {
        frontmattermd {
          mainpitch_description {
            html
          }
        }
      }
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
        }
        heading
        description
        highlights {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        quotes {
          image {
            childImageSharp {
              fluid(maxWidth: 440, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        awards {
          image {
            childImageSharp {
              fluid(maxWidth: 440, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        intro {
          blurbs {
            header
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
