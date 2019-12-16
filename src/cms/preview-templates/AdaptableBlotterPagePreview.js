import React from 'react'
import PropTypes from 'prop-types'
import { AdaptableBlotterPageTemplate } from '../../templates/adaptable-blotter-page'

import '../../components/index.scss'

const AdaptableBlotterPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <AdaptableBlotterPageTemplate
      title={data.title}
      cta={data.cta}
      keyfeatures={data.keyfeatures}
      functionalities={data.functionalities}
      functionalitiestitle={data.functionalitiestitle}
      headline={data.headline}
      usecases={data.usecases}
      usecaseTitle={data.usecaseTitle}
      video={data.video}
      testimonials={data.testimonials}
      keyfeaturestitle={data.keyfeaturestitle}
      description={data.description}
      content={widgetFor('body')}
    />
  )
}

AdaptableBlotterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default AdaptableBlotterPagePreview
