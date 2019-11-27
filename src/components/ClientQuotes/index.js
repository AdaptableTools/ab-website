import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import GridLayout from '../GridLayout'

import Quote from '../../img/quote.inline.svg'

import './index.scss'
import join from '../join'

// const quoteSrc = ''

export default ({ quotes }) => (
  <GridLayout minBoxWidth={320}>
    {quotes.map((quote, i) => {
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
          key={quote.text}
          className="relative italic text-xl md:text-2xl ClientQuote overflow-hidden border-blue-300 border-solid border rounded flex flex-col items-center"
        >
          <p
            className={join(
              'ClientQuoteText',
              i % 2 == 0 ? 'pl-16 pr-5' : 'pr-16 pl-5'
            )}
            style={{
              [!quote.image ? 'marginBottom' : '']: 0,
              [!quote.image ? 'flex' : '']: 1
            }}
          >
            {quoteImage}
            {quote.text}
          </p>
          {quote.image ? (
            <div
              style={{ xmaxHeight: '20rem', width: '100%' }}
              className="p-6 flex flex-col flex-1 justify-center"
            >
              <div style={{ width: '100%' }}>
                {/*<Img fixed={quote.image.childImageSharp.fixed} />*/}
                {
                  <PreviewCompatibleImage
                    imageStyle={{ xmaxHeight: '20rem' }}
                    imageInfo={{
                      image: quote.image
                    }}
                  />
                }
              </div>
            </div>
          ) : null}
        </div>
      )
    })}
  </GridLayout>
)
