import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'
import PreviewLayout from './Preview'

const ContactPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return <ContactPageTemplate {...data} content={widgetFor('body')} />
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default ContactPagePreview
