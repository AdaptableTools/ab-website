import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import GridLayout from '../GridLayout'

import Quote from '../../img/quote.inline.svg'

import './index.scss'
import join from '../join'

// const awardsrc = ''

export default ({ awards }) => (
  <GridLayout minBoxWidth={320}>
    {awards.map((award, i) => {
      const quoteImage = (
        <Quote
          style={{
            fill: 'currentColor',
            height: '4rem',
            width: '4rem',
            position: 'absolute',
            top: 0,
            [i % 2 == 0 ? 'left' : 'right']: 0
          }}
        ></Quote>
      )
      return (
        <div
          key={award.text}
          className="relative italic Award text-xl md:text-2xl overflow-hidden rounded flex flex-col items-center"
        >
          <p
            className={join(
              'AwardText',
              i % 2 == 0 ? 'pl-16 pr-5' : 'pr-16 pl-5'
            )}
          >
            {quoteImage}
            {award.text}
          </p>
          <div
            style={{ xmaxHeight: '20rem', width: '100%' }}
            className="p-6 flex flex-col flex-1 justify-center"
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
        </div>
      )
    })}
  </GridLayout>
)
