import React from 'react'
import PropTypes from 'prop-types'
import { GridGurusPageTemplate } from '../../templates/grid-gurus-page'

import '../../components/index.scss'

const GridGurusPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return <GridGurusPageTemplate {...data} content={widgetFor('body')} />
}

GridGurusPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default GridGurusPagePreview
