import React, { useEffect } from 'react'
import PreviewLayout from './preview-templates/Preview'

import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'
import weakMemoize from '@emotion/weak-memoize'

const memoizedCreateCacheWithContainer = weakMemoize(container => {
  let newCache = createCache({ container })
  return newCache
})

export default Component => props => {
  const iframe = document.querySelector('iframe')
  const iframeHeadElem = iframe && iframe.contentDocument.head

  if (!iframeHeadElem) {
    return null
  }

  useEffect(() => {
    const sheets = [...document.head.querySelectorAll('link')]
    sheets.forEach(sheet => {
      const newSheet = sheet.cloneNode()
      iframeHeadElem.appendChild(newSheet)
    })
  })

  return (
    <CacheProvider value={memoizedCreateCacheWithContainer(iframeHeadElem)}>
      <PreviewLayout>
        <Component {...props} />
      </PreviewLayout>
    </CacheProvider>
  )
}
