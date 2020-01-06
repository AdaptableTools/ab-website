import React from 'react'
import PropTypes from 'prop-types'
import { XAdaptablePageTemplate } from '../../templates/xadaptable-page'

import '../../components/index.scss'

const XAdaptablePagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return <XAdaptablePageTemplate {...data} content={widgetFor('body')} />
}

XAdaptablePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default XAdaptablePagePreview
