import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'
import PreviewLayout from './Preview'

const ContactPagePreview = ({ entry, widgetFor }) => (
  <ContactPageTemplate
    title={entry.getIn(['data', 'title'])}
    headerImage={entry.getIn(['data', 'headerimage'])}
    content={widgetFor('body')}
  />
)

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default ContactPagePreview
