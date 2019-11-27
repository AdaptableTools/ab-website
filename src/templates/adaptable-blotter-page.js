import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import MaxWidth from '../components/MaxWidth'
import GridLayout from '../components/GridLayout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'

export const AdaptableBlotterPageTemplate = ({
  title,
  content,
  keyfeatures,
  headline,
  video,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <BackgroundImage src={'/img/blog-index.jpg'} title={title}>
        <AbsoluteNav />
      </BackgroundImage>
      <MaxWidth className="mt-16 pb-8">
        {video}
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
          {headline}
        </h2>
      </MaxWidth>

      {keyfeatures && keyfeatures.length ? (
        <div className="bg-blue-800">
          <MaxWidth className="mt-16 pb-8">
            <GridLayout>
              {keyfeatures.map(feature => {
                return (
                  <div key={feature.name} className="p-4  ">
                    <div className="p-16">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: feature.image
                        }}
                      />
                    </div>
                    <p className="text-center mt-4 text-xl font-normal text-white">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </GridLayout>
          </MaxWidth>
        </div>
      ) : null}

      <MaxWidth className="mt-16 pb-8">
        <PageContent className="content" content={content} />
      </MaxWidth>
    </>
  )
}

AdaptableBlotterPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AdaptableBlotterPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AdaptableBlotterPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        video={post.frontmatter.video}
        headline={post.frontmatter.headline}
        keyfeatures={post.frontmatter.keyfeatures}
        content={post.html}
      />
    </Layout>
  )
}

AdaptableBlotterPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AdaptableBlotterPage

export const adaptableBlotterPageQuery = graphql`
  query AdaptableBlotterPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        video
        headline

        keyfeatures {
          name
          description
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
