import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

import FeaturedBlogRoll from '../components/FeaturedBlogRoll'
import MaxWidth from '../components/MaxWidth'
import GridLayout from '../components/GridLayout'
import ClientQuotes from '../components/ClientQuotes'
import Awards from '../components/Awards'
import CTAButton from '../components/CTAButton'
import Strip from '../components/Strip'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import ExternalLink from '../components/ExternalLink'
import AnimateWhenVisible from '../components/AnimateWhenVisible'
import PageTitle from '../components/PageTitle'
import Headline from '../components/Headline'

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  highlights,
  quotes,
  ctalink,
  ctatext,
  quotestitle,
  quotestext,
  awards,
  mainpitch,
}) => (
  <div>
    <AbsoluteNav />
    <BackgroundImage image={image}></BackgroundImage>

    <PageTitle title={title} />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
      }}
    >
      <AnimateWhenVisible
        animationName="enter-from-right"
        style={{ margin: '20px auto' }}
      >
        <CTAButton href="https://demo.adaptabletools.com/">
          {subtitle}
        </CTAButton>
      </AnimateWhenVisible>
    </div>

    <MaxWidth className="mt-16">
      <h1 className="text-5xl font-thin  text-blue-800">{mainpitch.title}</h1>
      <p className="mt-10 text-xl">
        <HTMLContent>{mainpitch.description}</HTMLContent>
      </p>
    </MaxWidth>

    <Strip variant="dark">
      <MaxWidth className="mt-16 pb-8">
        <GridLayout>
          {highlights.map((highlight, i) => {
            return (
              <AnimateWhenVisible
                animationDelay={`0.${i + 2}s`}
                key={highlight.text}
                className="p-4  "
              >
                <PreviewCompatibleImage imageInfo={highlight.image || {}} />

                <HTMLContent className="text-center mt-4 text-xl font-normal text-white">
                  {highlight.text}
                </HTMLContent>
              </AnimateWhenVisible>
            )
          })}
        </GridLayout>

        <div className="text-center">
          <CTAButton tone="light" href="book-demo">
            Book a Demo
          </CTAButton>
        </div>
      </MaxWidth>
    </Strip>

    <MaxWidth className="mt-16">
      <Headline>{quotestitle}</Headline>

      <HTMLContent className="my-16 text-xl">{quotestext}</HTMLContent>

      <ClientQuotes quotes={quotes} />

      <AnimateWhenVisible style={{ textAlign: 'center' }}>
        <CTAButton style={{ margin: '20px auto' }} href={ctalink}>
          {ctatext}
        </CTAButton>
      </AnimateWhenVisible>
    </MaxWidth>

    <Strip variant="dark">
      <MaxWidth className="mt-16 pt-16">
        <h1 className="text-5xl font-thin text-white">Awards</h1>
        <Awards awards={awards} />
      </MaxWidth>
    </Strip>

    <MaxWidth className="mt-16">
      <h1 className="text-5xl font-thin  text-blue-800">Latest stories</h1>

      <FeaturedBlogRoll />
    </MaxWidth>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,

  subtitle: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
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
        subtitle={frontmatter.subtitle}
        ctatext={frontmatter.ctatext}
        ctalink={frontmatter.ctalink}
        highlights={frontmatter.highlights}
        quotes={frontmatter.quotes}
        quotestitle={frontmatter.quotestitle}
        quotestext={
          fields.frontmattermd.quotestext
            ? fields.frontmattermd.quotestext.html
            : ''
        }
        awards={frontmatter.awards || []}
        mainpitch={{
          ...frontmatter.mainpitch,
          description: fields.frontmattermd.mainpitch_description
            ? fields.frontmattermd.mainpitch_description.html
            : '',
        }}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
          quotestext {
            html
          }
        }
      }
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
        }

        ctatext
        ctalink

        description
        highlights {
          image {
            publicURL
          }
          text
        }
        quotestitle
        quotes {
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
      }
    }
  }
`
