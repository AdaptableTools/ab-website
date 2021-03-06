import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import GridLayout from '../GridLayout'

import Quote from '../../img/quote.inline.svg'

import './index.scss'
import join from '../join'
import AnimateWhenVisible from '../AnimateWhenVisible'

// const awardsrc = ''

export default ({ awards }) => (
  <GridLayout style={{ paddingLeft: 0, paddingRight: 0 }} minBoxWidth={300}>
    {awards.map((award, i) => {
      return (
        <AnimateWhenVisible
          animationDelay={`0.${i + 2}s`}
          key={award.text}
          className="relative italic Award text-xl md:text-2xl overflow-hidden rounded flex flex-col items-center"
        >
          <p className={join('AwardText', 'px-3 md:px-5')}>{award.text}</p>
          <div
            style={{ width: '100%' }}
            className="p-3 md:p-6 flex flex-col flex-1 justify-center"
          >
            <div style={{ width: '100%' }}>
              {/*<Img fixed={award.image.childImageSharp.fixed} />*/}
              {
                <PreviewCompatibleImage
                  imageStyle={{ xmaxHeight: '20rem' }}
                  imageInfo={{
                    image: award.image
                  }}
                />
              }
            </div>
          </div>
        </AnimateWhenVisible>
      )
    })}
  </GridLayout>
)
