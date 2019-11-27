import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import MaxWidth from '../components/MaxWidth'
import Nav from '../components/Navbar'
import GridLayout from '../components/GridLayout'
import ClientQuotes from '../components/ClientQuotes'

import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'

export const GridGurusTemplate = ({
  title,
  content,
  testimonials,
  services,
  headline,
  video,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <BackgroundImage src={'/img/Carousel5.png'} title={title}>
        <AbsoluteNav />
      </BackgroundImage>
      <MaxWidth className="mt-16 pb-8">
        {video}
        <h2 className="text-5xl font-thin  text-blue-800">
          headline comes here {headline}
          CTA - get in touch
        </h2>
      </MaxWidth>

      {services && services.length ? (
        <div className="bg-blue-800">
          <MaxWidth className="mt-16 pb-8">
            <h2 className="pt-8 text-5xl font-thin text-white">Our services</h2>
            <GridLayout>
              {services.map(service => {
                return (
                  <div key={service.name} className="p-4  ">
                    <p className="text-center mt-4 text-xl font-normal text-white">
                      {service.name}
                    </p>
                  </div>
                )
              })}
            </GridLayout>
            CTA in services
          </MaxWidth>
        </div>
      ) : null}

      {testimonials && testimonials.length ? (
        <MaxWidth className="mt-16 pb-8">
          <h2 className="text-5xl font-thin  text-blue-800">
            What clients are saying
          </h2>
          <ClientQuotes quotes={testimonials} />
        </MaxWidth>
      ) : null}

      <MaxWidth>
        <PageContent className="content mt-16" content={content} />
      </MaxWidth>
    </>
  )
}

GridGurusTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const GridGurus = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GridGurusTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        video={post.frontmatter.video}
        headline={post.frontmatter.headline}
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
