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
import ClientQuotes from '../components/ClientQuotes'
import Button from '../components/Button'
import avatars from '../components/avatars'
import ExternalLink from '../components/ExternalLink'
import Timeline from '../components/Timeline'
import Headline from '../components/Headline'

export const AdaptableBlotterPageTemplate = ({
  title,
  content,
  cta,
  keyfeatures,
  functionalities,
  functionalitiestitle,
  headline,
  usecases,
  usecaseTitle,
  video,
  testimonials,
  keyfeaturestitle,
  description,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <BackgroundImage src={'/img/Carousel7.png'} title={title}>
        <AbsoluteNav />
      </BackgroundImage>
      <MaxWidth className="mt-16 pb-8">
        {video ? (
          <AnimateWhenVisible>
            <Video src={video} />
          </AnimateWhenVisible>
        ) : null}
        <br />
        <AnimateWhenVisible>
          <Headline as="h2" className="text-blue-800 mb-5">
            {headline}
          </Headline>
          <p className="mt-10 text-xl">
            <HTMLContent>{description}</HTMLContent>
          </p>
        </AnimateWhenVisible>
      </MaxWidth>

      {keyfeatures && keyfeatures.length ? (
        <div className="bg-blue-800">
          <MaxWidth className="mt-16 pb-8">
            <AnimateWhenVisible as={Headline} className="text-white pt-16">
              {keyfeaturestitle}
            </AnimateWhenVisible>
            <GridLayout>
              {keyfeatures.map((feature, i) => {
                return (
                  <AnimateWhenVisible
                    animationDelay={`${i * 300 + 200}ms`}
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
                    {feature.description ? (
                      <p className="text-center mt-4 text-xl font-normal text-white">
                        {feature.description}
                      </p>
                    ) : null}
                  </AnimateWhenVisible>
                )
              })}
            </GridLayout>
          </MaxWidth>
        </div>
      ) : null}

      {testimonials && testimonials.length ? (
        <MaxWidth className="mt-16 pb-8">
          <AnimateWhenVisible as={Headline} className="text-blue-800 mb-5">
            Here's what some of those using the Adaptable Blotter have to say
          </AnimateWhenVisible>
          <ClientQuotes quotes={testimonials} avatars={avatars} />
        </MaxWidth>
      ) : null}

      {usecases && usecases.length ? (
        <div className="bg-blue-800">
          <MaxWidth>
            <AnimateWhenVisible as={Headline} className="pt-8 text-white">
              {usecaseTitle}
            </AnimateWhenVisible>
          </MaxWidth>

          {usecases.map((usecase, i) => {
            return (
              <AnimateWhenVisible
                animationDelay={`${i * 200 + 200}ms`}
                key={usecase.who}
                className={` text-xl font-normal  ${
                  i % 2 ? 'bg-white ' : 'text-white'
                }`}
              >
                <MaxWidth
                  className="mt-16 pb-8 pt-8"
                  style={{
                    textAlign: i % 2 ? 'right' : 'left'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: i % 2 ? 'row' : 'row-reverse',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        flex: 4,
                        textAlign: i % 2 ? 'right' : 'left',
                        [`margin${i % 2 ? 'Right' : 'Left'}`]: 50
                      }}
                    >
                      <div className="text-3xl font-thin">
                        <b style={{ letterSpacing: '0.1rem' }}>RESULT:</b>{' '}
                        {usecase.result}
                        <div
                          style={{ width: '100%' }}
                          className="p-6 flex flex-col flex-1 justify-center"
                        >
                          <div style={{ width: '100%' }}>
                            {/*<Img fixed={quote.image.childImageSharp.fixed} />*/}
                            {
                              <PreviewCompatibleImage
                                imageStyle={{
                                  maxHeight: '20rem',
                                  maxWidth: '50vw'
                                }}
                                imageInfo={{
                                  image: usecase.image
                                }}
                              />
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    <Timeline
                      darkColor="rgb(44, 82, 130)"
                      variant={i % 2 ? 'dark' : 'light'}
                      stepStyle={{
                        maxWidth: 350
                      }}
                      style={{
                        flex: 2,
                        paddingTop: 30,
                        paddingBottom: 30
                      }}
                      steps={[
                        usecase.who,
                        usecase.where,
                        <b style={{ whiteSpace: 'nowrap' }}>
                          + AdaptableBlotter
                        </b>
                      ]}
                    />
                  </div>
                </MaxWidth>
              </AnimateWhenVisible>
            )
          })}

          <AnimateWhenVisible
            animationDelay="0.5s"
            className="text-center pb-10"
          >
            <ExternalLink href="https://demo.adaptableblotter.com">
              <Button tone="light" className="text-3xl">
                {cta}
              </Button>
            </ExternalLink>
          </AnimateWhenVisible>
        </div>
      ) : null}

      {functionalities && functionalities.length ? (
        <MaxWidth className="mt-16 pb-8">
          <AnimateWhenVisible as={Headline} className="pt-16 mb-8">
            {functionalitiestitle}
          </AnimateWhenVisible>
          <GridLayout style={{ padding: 0 }}>
            {functionalities.map((functionality, i) => {
              return (
                <AnimateWhenVisible
                  animationDelay={`${i * 100 +
                    100 +
                    Math.floor(Math.random() * 200)}ms`}
                  key={functionality.name}
                  className="p-3 bg-blue-800 text-white"
                >
                  <div
                    className="p-8 text-2xl"
                    style={{
                      display: 'flex',
                      flexFlow: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <i class="material-icons text-2xl">{functionality.icon}</i>
                    <h4>{functionality.name}</h4>
                  </div>

                  <p className="text-center mt-4 text-xl pb-4 font-normal ">
                    {functionality.description}
                  </p>
                </AnimateWhenVisible>
              )
            })}
          </GridLayout>
        </MaxWidth>
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
  keyfeaturestitle: PropTypes.string,
  description: PropTypes.string,
  contentComponent: PropTypes.func
}

const AdaptableBlotterPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { fields } = post

  return (
    <Layout>
      <AdaptableBlotterPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        video={post.frontmatter.video}
        keyfeaturestitle={post.frontmatter.keyfeaturestitle}
        functionalities={post.frontmatter.functionalities}
        functionalitiestitle={post.frontmatter.functionalitiestitle}
        testimonials={post.frontmatter.testimonials}
        usecases={post.frontmatter.usecases}
        cta={post.frontmatter.cta}
        usecaseTitle={post.frontmatter.usecaseTitle}
        description={
          fields && fields.frontmattermd && fields.frontmattermd.description
            ? fields.frontmattermd.description.html
            : ''
        }
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

// fields {
//   frontmattermd {
//     description {
//       html
//     }
//   }
// }

export const adaptableBlotterPageQuery = graphql`
  query AdaptableBlotterPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html

      frontmatter {
        title
        video
        headline

        testimonials {
          text
        }

        keyfeaturestitle

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

        functionalitiestitle
        functionalities {
          name
          description
          icon
        }

        cta
        usecaseTitle
        usecases {
          who
          where
          result
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
