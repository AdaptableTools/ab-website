import React from 'react'
import PropTypes from 'prop-types'
import { GridGurusPageTemplate } from '../../templates/grid-gurus-page'

import '../../components/index.scss'

const GridGurusPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <GridGurusPageTemplate
      title={data.title}
      testimonials={data.testimonials}
      services={data.services}
      headline={data.headline}
      description={data.description}
      video={data.video}
      cta1={data.cta1}
      cta2={data.cta2}
      content={widgetFor('body')}
    />
  )
}

GridGurusPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default GridGurusPagePreview
