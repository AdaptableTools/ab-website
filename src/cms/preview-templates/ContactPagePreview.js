import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'
import PreviewLayout from './Preview'

const ContactPagePreview = ({ entry, widgetFor }) => (
  <PreviewLayout>
    <ContactPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  </PreviewLayout>
)

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default ContactPagePreview
