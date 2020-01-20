import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import GridLayout from '../GridLayout'
import { HTMLContent } from '../Content'

import Quote from '../../img/quote.inline.svg'

import './index.scss'
import join from '../join'
import AnimateWhenVisible from '../AnimateWhenVisible'

// const quoteSrc = ''

export default ({ quotes, avatars }) => (
  <GridLayout minBoxWidth={300} style={{ padding: 0 }}>
    {quotes.map((quote, i) => {
      const quoteImage = (
        <Quote
          style={{
            fill: 'currentColor',
            height: '2rem',
            width: '2rem',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        ></Quote>
      )

      const Cmp = AnimateWhenVisible
      return (
        <Cmp
          animationDelay={`0.${i + 2}s`}
          debug={i === 0}
          key={quote.text}
          className="relative italic text-xl md:text-2xl ClientQuote overflow-hidden border-blue-300 border-solid border rounded flex flex-col items-center"
        >
          <p
            className={join(
              'ClientQuoteText',
              i % 2 == 0
                ? 'pl-12 pr-4 md:pl-16 md:pr-5'
                : 'pr-12 pl-4 dm:pr-16 md:pl-5'
            )}
            style={{
              width: '100%',
              [!quote.image ? 'marginBottom' : '']: 0,
              [!quote.image ? 'flex' : '']: 1
            }}
          >
            {quoteImage}
            <HTMLContent as="p">{quote.text}</HTMLContent>
          </p>
          {avatars ? (
            <AnimateWhenVisible animationDelay={`0.${((i * 2) % 8) + 2}s`}>
              {React.cloneElement(avatars[i % avatars.length], {
                pieceSize: 50,
                style: {
                  marginBottom: 'var(--ab-space-4)'
                }
              })}
            </AnimateWhenVisible>
          ) : null}
          {quote.image ? (
            <div
              style={{ width: '100%' }}
              className="p-6 flex flex-col flex-1 justify-center"
            >
              <div style={{ width: '100%' }}>
                {/*<Img fixed={quote.image.childImageSharp.fixed} />*/}
                {
                  <PreviewCompatibleImage
                    imageStyle={{ maxHeight: '20rem', maxWidth: '50vw' }}
                    imageInfo={{
                      image: quote.image
                    }}
                  />
                }
              </div>
            </div>
          ) : null}
        </Cmp>
      )
    })}
  </GridLayout>
)
