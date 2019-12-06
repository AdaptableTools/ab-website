import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Avatar from 'avataaars'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import MaxWidth from '../components/MaxWidth'
import Nav from '../components/Navbar'
import GridLayout from '../components/GridLayout'
import ClientQuotes from '../components/ClientQuotes'

import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import Button from '../components/Button'
import AnimateWhenVisible from '../components/AnimateWhenVisible'

// get them from https://getavataaars.com

const avatars = [
  <Avatar
    avatarStyle="Circle"
    pieceSize={100}
    topType="LongHairMiaWallace"
    accessoriesType="Blank"
    hairColor="BrownDark"
    facialHairType="Blank"
    clotheType="BlazerShirt"
    eyeType="Default"
    eyebrowType="Default"
    mouthType="Default"
    skinColor="Light"
  />,
  <Avatar
    avatarStyle="Circle"
    pieceSize={100}
    topType="ShortHairShortFlat"
    accessoriesType="Round"
    hairColor="Brown"
    facialHairType="BeardLight"
    facialHairColor="Brown"
    clotheType="BlazerShirt"
    eyeType="Default"
    eyebrowType="Default"
    mouthType="Smile"
    skinColor="Brown"
  />,
  <Avatar
    avatarStyle="Circle"
    pieceSize={100}
    topType="LongHairStraightStrand"
    accessoriesType="Blank"
    hairColor="Brown"
    facialHairType="Blank"
    clotheType="BlazerShirt"
    eyeType="Happy"
    eyebrowType="RaisedExcited"
    mouthType="Twinkle"
    skinColor="Brown"
  />,
  <Avatar
    avatarStyle="Circle"
    pieceSize={100}
    topType="LongHairStraightStrand"
    accessoriesType="Blank"
    hairColor="Black"
    facialHairType="Blank"
    clotheType="ShirtScoopNeck"
    clotheColor="Red"
    eyeType="Default"
    eyebrowType="DefaultNatural"
    mouthType="Twinkle"
    skinColor="Pale"
  />,
  <Avatar
    avatarStyle="Circle"
    pieceSize={100}
    topType="ShortHairShortRound"
    accessoriesType="Blank"
    hairColor="BrownDark"
    facialHairType="Blank"
    clotheType="Hoodie"
    clotheColor="Heather"
    eyeType="Default"
    eyebrowType="DefaultNatural"
    mouthType="Twinkle"
    skinColor="Black"
  />
]

export const GridGurusTemplate = ({
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
        {video}
        <AnimateWhenVisible
          as="h2"
          className="text-5xl font-thin  text-blue-800"
        >
          {headline}
        </AnimateWhenVisible>
        <AnimateWhenVisible animationDelay="0.35s">
          <p></p>
          <p>{description}</p>
        </AnimateWhenVisible>

        <AnimateWhenVisible animationDelay="0.5s">
          <Button className="mt-6 text-3xl">{cta1}</Button>
        </AnimateWhenVisible>
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
          <AnimateWhenVisible className="text-5xl font-thin text-blue-800">
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
