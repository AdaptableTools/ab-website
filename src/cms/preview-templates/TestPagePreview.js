import React from 'react'
import PropTypes from 'prop-types'
import { TestPageTemplate } from '../../templates/test-page'

import '../../components/index.scss'

const TestPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return <TestPageTemplate {...data} />
}

TestPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default TestPagePreview
