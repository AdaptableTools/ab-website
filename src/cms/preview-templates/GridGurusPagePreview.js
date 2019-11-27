import React from 'react'
import PropTypes from 'prop-types'
import { GridGurusPageTemplate } from '../../templates/grid-gurus-page'

import '../../components/index.scss'

const GridGurusPagePreview = ({ entry, widgetFor }) => (
  <GridGurusPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

GridGurusPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default GridGurusPagePreview
