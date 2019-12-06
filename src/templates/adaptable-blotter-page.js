import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Video from '../components/Video'
import Content, { HTMLContent } from '../components/Content'
import MaxWidth from '../components/MaxWidth'
import GridLayout from '../components/GridLayout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import AnimateWhenVisible from '../components/AnimateWhenVisible'

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
      <BackgroundImage src={'/img/Carousel7.png'}>
        <AbsoluteNav />
      </BackgroundImage>
      <MaxWidth className="mt-16 pb-8">
        {video ? <Video src={video} /> : null}
        <br />
        HTML content to be customized for later
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
          {headline}
        </h2>
        More details about the blotter & Link to demo site
      </MaxWidth>
      <MaxWidth className="mt-16 pb-8 ">
        The power of data is our ability to read and manipulate it.​ Adaptable
        Tools is a FinTech software house committed to building the tools to
        make data work for users, helping decision-making and enhancing
        productivity throughout data-driven organisations. Development focuses
        on end-users, creating products which meet their needs intuitively.
        Adaptable Tools works with financial services businesses and software
        houses globally to change the way they work. Adaptable Tools is
        recognised as one of the leading innovators in the web-desktop financial
        space and was the winner of the Best FinTech Innovation award at the
        Fixed Income Leaders’ Summit in 2018. ​
      </MaxWidth>

      {keyfeatures && keyfeatures.length ? (
        <div className="bg-blue-800">
          <MaxWidth className="mt-16 pb-8">
            <GridLayout>
              {keyfeatures.map((feature, i) => {
                return (
                  <AnimateWhenVisible
                    animationDelay={`0.${i + 2}s`}
                    key={feature.name}
                    className="p-4  "
                  >
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
                  </AnimateWhenVisible>
                )
              })}
            </GridLayout>
          </MaxWidth>
        </div>
      ) : null}

      <MaxWidth>usecases</MaxWidth>
      <MaxWidth>
        what clients are saying - something along the lines from the grid gurus
        page
      </MaxWidth>
      <MaxWidth>AB features with icons from the app</MaxWidth>

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
