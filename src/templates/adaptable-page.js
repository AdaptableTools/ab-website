import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Video from '../components/Video'
import Content, { HTMLContent } from '../components/Content'
import MaxWidth from '../components/MaxWidth'
import CTAButton from '../components/CTAButton'
import GridLayout from '../components/GridLayout'
import Strip, { getClassNameForVariant } from '../components/Strip'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import AnimateWhenVisible from '../components/AnimateWhenVisible'
import ClientQuotes from '../components/ClientQuotes'
import Button from '../components/Button'
import { Box, Flex } from 'rebass'
import avatars from '../components/avatars'
import join from '../components/join'
import ExternalLink from '../components/ExternalLink'
import Timeline from '../components/Timeline'
import Headline from '../components/Headline'

export const AdaptablePageTemplate = ({
  title,
  content,
  cta,
  keyfeatures,
  functionalities,
  image,
  functionalitiestitle,
  headline,
  usecases,
  usecaseTitle,
  video,
  testimonials,
  keyfeaturestitle,
  description,
  contentComponent,
  cls,
}) => {
  const PageContent = contentComponent || Content

  const hasTestimonials = testimonials && testimonials.length
  const hasKeyFeatures = keyfeatures && keyfeatures.length
  const hasUseCases = usecases && usecases.length
  const hasFunctionalities = functionalities && functionalities.length

  const strips = [
    hasKeyFeatures,
    hasTestimonials,
    hasUseCases,
    hasFunctionalities,
  ]
  let stripVariants = strips
    .filter((s) => s)
    .map((_, i) => (i % 2 === 0 ? 'dark' : 'light'))

  let currentVariant = 0
  const getVariant = () => {
    const result = stripVariants[currentVariant]
    currentVariant++
    return result
  }

  let useCasesVariant
  return (
    <>
      <AbsoluteNav />
      <BackgroundImage
        image={image}
        title={title}
        className={join(cls || '', 'AdaptableBgImage')}
      ></BackgroundImage>
      {video || headline || description ? (
        <MaxWidth className="mt-16 pb-8">
          {video ? (
            <AnimateWhenVisible>
              <Video src={video} />
            </AnimateWhenVisible>
          ) : null}
          <br />
          <AnimateWhenVisible>
            <Headline as="h2" className="text-blue-800 mb-5">
              <HTMLContent>{headline}</HTMLContent>
            </Headline>
            <p className="mt-10 text-xl">
              <HTMLContent>{description}</HTMLContent>
            </p>

            <div className="text-center mt-10">
              <CTAButton href="/book-demo">Book a Demo</CTAButton>
            </div>
          </AnimateWhenVisible>
        </MaxWidth>
      ) : null}
      {hasKeyFeatures ? (
        <Strip variant={getVariant()}>
          <MaxWidth className="mt-16 pb-8">
            <AnimateWhenVisible as={Headline} className=" pt-16 text-center">
              {keyfeaturestitle}
            </AnimateWhenVisible>
            <GridLayout
              minBoxWidth={300}
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              {keyfeatures.map((feature, i) => {
                return (
                  <AnimateWhenVisible
                    animationDelay={`${i * 300 + 200}ms`}
                    key={feature.description}
                    className="p-4  mb-4"
                  >
                    <Video src={feature.video} />

                    {feature.description ? (
                      <p className="text-center mt-4 text-xl font-normal text-white">
                        {feature.description}
                      </p>
                    ) : null}
                  </AnimateWhenVisible>
                )
              })}
            </GridLayout>

            <div className="text-center">
              <CTAButton tone="light" href="/book-demo">
                Book a Demo
              </CTAButton>
            </div>
          </MaxWidth>
        </Strip>
      ) : null}

      {hasTestimonials ? (
        <Strip variant={getVariant()}>
          <MaxWidth className="mt-16 pb-8">
            <AnimateWhenVisible as={Headline} className="text-blue-800 mb-5">
              Here's what some of those using the Adaptable Blotter have to say
            </AnimateWhenVisible>
            <ClientQuotes quotes={testimonials} avatars={avatars} />
          </MaxWidth>
        </Strip>
      ) : null}
      {hasUseCases ? (
        <Strip variant={(useCasesVariant = getVariant())}>
          <MaxWidth>
            <AnimateWhenVisible as={Headline} className="pt-8">
              {usecaseTitle}
            </AnimateWhenVisible>
          </MaxWidth>

          {usecases.map((usecase, i) => {
            const variants = ['light', 'dark']
            const variantStartIndex = variants.indexOf(useCasesVariant)
            const variant = variants[(i + variantStartIndex) % 2]
            return (
              <AnimateWhenVisible
                animationDelay={`${i * 200 + 200}ms`}
                key={usecase.who}
                className={` text-xl font-normal  ${getClassNameForVariant(
                  variant
                )}`}
              >
                <MaxWidth
                  pxMobile={1}
                  className="mt-16 pb-8 pt-8"
                  style={{
                    textAlign: i % 2 ? 'right' : 'left',
                  }}
                >
                  <Flex
                    alignItems={'center'}
                    flexDirection={['column', i % 2 ? 'row' : 'row-reverse']}
                  >
                    <Box
                      style={{
                        flex: 4,
                        textAlign: i % 2 ? 'right' : 'left',
                      }}
                      paddingLeft={[2, 0]}
                      paddingRight={[2, 0]}
                      marginLeft={i % 2 ? 0 : ['10px', '50px']}
                      marginRight={!i % 2 ? 0 : ['10px', '50px']}
                    >
                      <div className="text-xl md:text-3xl font-thin">
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
                                  maxWidth: '50vw',
                                }}
                                imageInfo={{
                                  image: usecase.image,
                                }}
                              />
                            }
                          </div>
                        </div>
                      </div>
                    </Box>

                    <Box
                      flex={[4, 2]}
                      style={{
                        paddingTop: 30,
                        paddingBottom: 30,
                      }}
                    >
                      <Timeline
                        darkColor="var(--ab-color-blue-opaque)"
                        variant={
                          i % 2
                            ? useCasesVariant == 'dark'
                              ? 'dark'
                              : 'light'
                            : useCasesVariant == 'dark'
                            ? 'light'
                            : 'dark'
                        }
                        stepStyle={{
                          maxWidth: 350,
                        }}
                        steps={[usecase.who, usecase.where, <b>+ AdapTable</b>]}
                      />
                    </Box>
                  </Flex>
                </MaxWidth>
              </AnimateWhenVisible>
            )
          })}

          <AnimateWhenVisible
            animationDelay="0.5s"
            className="text-center pb-10"
          >
            <CTAButton href="https://demo.adaptabletools.com">{cta}</CTAButton>
          </AnimateWhenVisible>
        </Strip>
      ) : null}
      {hasFunctionalities ? (
        <Strip variant={getVariant()}>
          <MaxWidth className="mt-16 pb-8">
            {functionalitiestitle ? (
              <AnimateWhenVisible as={Headline} className="pt-16 mb-8">
                {functionalitiestitle}
              </AnimateWhenVisible>
            ) : null}
            <GridLayout style={{ padding: 0 }}>
              {functionalities.map((functionality, i) => {
                return (
                  <ExternalLink href={functionality.demourl}>
                    <AnimateWhenVisible
                      style={{
                        height: '100%',
                        display: 'flex',
                        flexFlow: 'column',
                      }}
                      animationDelay={`${i * 100 +
                        100 +
                        Math.floor(Math.random() * 200)}ms`}
                      key={functionality.name}
                      className="p-3 bg-blue-800 text-white text-center"
                    >
                      <div
                        className="p-8 text-2xl"
                        style={{
                          display: 'flex',
                          flexFlow: 'column',
                          alignItems: 'center',
                          flex: 1,
                        }}
                      >
                        <i
                          className="material-icons mb-4"
                          style={{
                            fontSize: 'var(--ab-font-size-8)',
                          }}
                        >
                          {functionality.icon}
                        </i>
                        <h4>{functionality.name}</h4>
                      </div>

                      {functionality.description ? (
                        <p className="text-center mt-4 text-xl pb-4 font-normal ">
                          {functionality.description}
                        </p>
                      ) : null}
                    </AnimateWhenVisible>
                  </ExternalLink>
                )
              })}
            </GridLayout>
          </MaxWidth>
        </Strip>
      ) : null}
      <AnimateWhenVisible>
        <Strip variant="light">
          <MaxWidth className="mt-16 pb-8">
            <PageContent className="content" content={content} />
          </MaxWidth>
        </Strip>
      </AnimateWhenVisible>
    </>
  )
}

AdaptablePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  keyfeaturestitle: PropTypes.string,
  description: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AdaptableBlotterPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { fields } = post

  return (
    <Layout>
      <AdaptablePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        cls={post.frontmatter.cls}
        video={post.frontmatter.video}
        image={post.frontmatter.image}
        keyfeaturestitle={post.frontmatter.keyfeaturestitle}
        testimonials={post.frontmatter.testimonials}
        usecases={post.frontmatter.usecases}
        cta={post.frontmatter.cta}
        usecaseTitle={post.frontmatter.usecaseTitle}
        description={post.frontmatter.description}
        headline={post.frontmatter.headline}
        keyfeatures={post.frontmatter.keyfeatures}
        content={post.html}
      />
    </Layout>
  )
}

AdaptableBlotterPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AdaptableBlotterPage

export const adaptableBlotterPageQuery = graphql`
  query AdaptableBlotterPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html

      frontmatter {
        title
        video
        cls
        headline
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        testimonials {
          text
        }

        keyfeaturestitle

        keyfeatures {
          video
          description
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
