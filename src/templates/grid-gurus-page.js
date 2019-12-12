import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import MaxWidth from '../components/MaxWidth'
import Nav from '../components/Navbar'
import GridLayout from '../components/GridLayout'

import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import Button from '../components/Button'
import AnimateWhenVisible from '../components/AnimateWhenVisible'
import Video from '../components/Video'
import ClientQuotes from '../components/ClientQuotes'
import avatars from '../components/avatars'

// get them from https://getavataaars.com

export const GridGurusPageTemplate = ({
  title,
  content,
  testimonials,
  services,
  headline,
  description,
  video,
  cta1,
  cta2,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <BackgroundImage src={'/img/Carousel7.png'} title={title}>
        <AbsoluteNav />
      </BackgroundImage>
      <MaxWidth className="mt-16 pb-8">
        {video ? <Video src={video} className="mb-4" /> : null}
        {headline ? (
          <AnimateWhenVisible
            as="h2"
            className="text-5xl font-thin  text-blue-800"
          >
            {headline}
          </AnimateWhenVisible>
        ) : null}
        {description ? (
          <AnimateWhenVisible animationDelay="0.35s">
            <p></p>
            <p>{description}</p>
          </AnimateWhenVisible>
        ) : null}

        {cta1 ? (
          <AnimateWhenVisible animationDelay="0.5s">
            <Button className="mt-6 text-3xl">{cta1}</Button>
          </AnimateWhenVisible>
        ) : null}
      </MaxWidth>

      {services && services.length ? (
        <div className="bg-blue-800">
          <MaxWidth className="mt-16 pb-8">
            <AnimateWhenVisible
              as="h2"
              className="pt-8 text-5xl font-thin text-white"
            >
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
                    <p className="text-center mt-4 text-xl font-normal text-white">
                      {service.name}
                    </p>
                  </AnimateWhenVisible>
                )
              })}
            </GridLayout>

            <AnimateWhenVisible animationDelay="0.5s" className="text-center">
              <Button tone="light" className="text-3xl">
                {cta2}
              </Button>
            </AnimateWhenVisible>
          </MaxWidth>
        </div>
      ) : null}

      {testimonials && testimonials.length ? (
        <MaxWidth className="mt-16 pb-8">
          <AnimateWhenVisible className="text-5xl font-thin text-blue-800 mb-5">
            <h3>What clients are saying</h3>
          </AnimateWhenVisible>
          <ClientQuotes quotes={testimonials} avatars={avatars} />
        </MaxWidth>
      ) : null}

      <AnimateWhenVisible>
        <MaxWidth>
          <PageContent className="content mt-16" content={content} />
        </MaxWidth>
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
        headline={post.frontmatter.headline}
        cta1={post.frontmatter.cta1}
        cta2={post.frontmatter.cta2}
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
        video
        headline
        description
        cta1
        cta2

        services {
          name
        }

        testimonials {
          text
        }
      }
    }
  }
`
