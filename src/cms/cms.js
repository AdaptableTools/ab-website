import CMS from 'netlify-cms-app'
import React from 'react'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { Control, Preview as YoutubePreview } from './widgets/youtube'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import AdaptableBlotterPagePreview from './preview-templates/AdaptableBlotterPagePreview'
import GridGurusPagePreview from './preview-templates/GridGurusPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

import IndexPagePreview from './preview-templates/IndexPagePreview'

import withStyles from './withStyles'

const registerTemplateForPreview = (name, Cmp) =>
  CMS.registerPreviewTemplate(name, withStyles(Cmp))

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

registerTemplateForPreview('index', IndexPagePreview)
registerTemplateForPreview('adaptable-blotter', AdaptableBlotterPagePreview)
registerTemplateForPreview(
  'other-data-tools-partners',
  AdaptableBlotterPagePreview
)
registerTemplateForPreview('grid-gurus', GridGurusPagePreview)
registerTemplateForPreview('about', AboutPagePreview)
registerTemplateForPreview('contact', ContactPagePreview)

registerTemplateForPreview('blog', BlogPostPreview)

CMS.registerWidget('youtube', Control, YoutubePreview)

// CMS.registerPreviewStyle(styles.toString(), { raw: true })

// CMS.registerPreviewStyle('../components/index.scss')
