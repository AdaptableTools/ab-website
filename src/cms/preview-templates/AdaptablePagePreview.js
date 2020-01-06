import React from 'react'
import PropTypes from 'prop-types'
import { AdaptablePageTemplate } from '../../templates/adaptable-page'

import '../../components/index.scss'

const AdaptablePagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return <AdaptablePageTemplate {...data} content={widgetFor('body')} />
}

AdaptablePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default AdaptablePagePreview
