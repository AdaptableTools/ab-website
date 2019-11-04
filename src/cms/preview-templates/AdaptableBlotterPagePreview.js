import React from 'react';
import PropTypes from 'prop-types';
import { AdaptableBlotterPageTemplate } from '../../templates/adaptable-blotter-page';

import '../../components/index.scss'

const AdaptableBlotterPagePreview = ({ entry, widgetFor }) => (
  <AdaptableBlotterPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

AdaptableBlotterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AdaptableBlotterPagePreview;
