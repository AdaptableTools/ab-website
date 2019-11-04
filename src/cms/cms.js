import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import { Control, Preview } from './widgets/youtube';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import AdaptableBlotterPagePreview from './preview-templates/AdaptableBlotterPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('adaptable-blotter', AdaptableBlotterPagePreview);
CMS.registerPreviewTemplate(
  'other-data-tools-partners',
  AdaptableBlotterPagePreview
);
CMS.registerPreviewTemplate('grid-gurus', AdaptableBlotterPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.registerWidget('youtube', Control, Preview);
