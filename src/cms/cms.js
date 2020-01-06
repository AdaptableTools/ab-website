import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { Control, Preview as YoutubePreview } from './widgets/youtube'

import AdaptablePagePreview from './preview-templates/AdaptablePagePreview'
import XAdaptablePagePreview from './preview-templates/XAdaptablePagePreview'
import GridGurusPagePreview from './preview-templates/GridGurusPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import TestPagePreview from './preview-templates/TestPagePreview'

import IndexPagePreview from './preview-templates/IndexPagePreview'

import withStyles from './withStyles'

const registerTemplateForPreview = (name, Cmp) =>
  CMS.registerPreviewTemplate(name, withStyles(Cmp))

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

registerTemplateForPreview('index', IndexPagePreview)
registerTemplateForPreview('adaptable', AdaptablePagePreview)
registerTemplateForPreview('test', TestPagePreview)
registerTemplateForPreview('xadaptable', XAdaptablePagePreview)
// registerTemplateForPreview('other-data-tools-partners', AdaptablePagePreview)
registerTemplateForPreview('grid-gurus', GridGurusPagePreview)

registerTemplateForPreview('blog', BlogPostPreview)

CMS.registerWidget('youtube', Control, YoutubePreview)

// CMS.registerPreviewStyle(styles.toString(), { raw: true })

// CMS.registerPreviewStyle('../components/index.scss')
