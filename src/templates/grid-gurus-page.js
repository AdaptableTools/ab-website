import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Strip from '../components/Strip'
import GridGurusBlogRoll from '../components/GridGurusBlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent } from '../components/Content'
import MaxWidth from '../components/MaxWidth'

import GridLayout from '../components/GridLayout'
import CTAButton from '../components/CTAButton'

import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import Button from '../components/Button'
import AnimateWhenVisible from '../components/AnimateWhenVisible'
import Video from '../components/Video'
import ClientQuotes from '../components/ClientQuotes'

import Headline from '../components/Headline'

export const GridGurusPageTemplate = ({
  title,
  content,
  testimonials,
  image,
  services,
  headline,
  description,
  video,
  ctalink,
  blogtitle,
  cta1,

  contentComponent
}) => {
  const PageContent = contentComponent || Content

  const ctaButton = <CTAButton href={ctalink}>{cta1}</CTAButton>
  return (
    <>
      <AbsoluteNav />
      <BackgroundImage image={image} title={title}></BackgroundImage>
      <MaxWidth className="mt-16">
        {video ? <Video src={video} className="mb-4" /> : null}
        {headline ? (
          <AnimateWhenVisible as={Headline} className="app-color_text-blue">
            <HTMLContent>{headline}</HTMLContent>
          </AnimateWhenVisible>
        ) : null}
        {description ? (
          <AnimateWhenVisible animationDelay="0.35s">
            <p></p>
            <p>
              <HTMLContent>{description}</HTMLContent>
            </p>
          </AnimateWhenVisible>
        ) : null}

        {cta1 ? (
          <AnimateWhenVisible
            animationDelay="0.5s"
            style={{ textAlign: 'center' }}
          >
            {ctaButton}
          </AnimateWhenVisible>
        ) : null}
      </MaxWidth>

      {services && services.length ? (
        <Strip variant="dark">
          <MaxWidth className="mt-16 pb-8">
            <AnimateWhenVisible as={Headline} className="pt-8 text-white">
              Our services
            </AnimateWhenVisible>
            <GridLayout>
              {services.map((service, i) => {
                return (
                  <AnimateWhenVisible
                    animationDelay={`0.${i + 3}s`}
                    key={service.name}
                    className="p-4  "
                  >
                    <PreviewCompatibleImage
                      imageStyle={{ maxHeight: '20rem', maxWidth: '50vw' }}
                      imageInfo={service.image || {}}
                    />
                    <p className="text-center mt-4 text-xl font-normal text-white">
                      {service.name}
                    </p>
                  </AnimateWhenVisible>
                )
              })}
            </GridLayout>
          </MaxWidth>
        </Strip>
      ) : null}

      {testimonials && testimonials.length ? (
        <Strip variant="light">
          <MaxWidth className="mt-16 pb-8">
            <AnimateWhenVisible as={Headline} className="text-blue-800 mb-5">
              What clients are saying
            </AnimateWhenVisible>
            <ClientQuotes quotes={testimonials} />
          </MaxWidth>
        </Strip>
      ) : null}

      <AnimateWhenVisible>
        <Strip variant="light">
          <MaxWidth>
            <PageContent className="mt-16 mb-16" content={content} />

            <Headline as="h3">{blogtitle}</Headline>
            <GridGurusBlogRoll />
          </MaxWidth>
        </Strip>
      </AnimateWhenVisible>
    </>
  )
}

GridGurusPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const GridGurus = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GridGurusPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        video={post.frontmatter.video}
        blogtitle={post.frontmatter.blogtitle}
        image={post.frontmatter.image}
        headline={post.frontmatter.headline}
        cta1={post.frontmatter.cta1}
        ctalink={post.frontmatter.ctalink}
        description={post.frontmatter.description}
        services={post.frontmatter.services}
        testimonials={post.frontmatter.testimonials}
        content={post.html}
      />
    </Layout>
  )
}

GridGurus.propTypes = {
  data: PropTypes.object.isRequired
}

export default GridGurus

export const GridGurusQuery = graphql`
  query GridGurus($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        video
        headline
        description
        cta1
        ctalink
        blogtitle

        services {
          name
          image {
            publicURL
          }
        }

        testimonials {
          text
        }
      }
    }
  }
`
