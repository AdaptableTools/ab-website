import React from 'react'
import '../../components/index.scss'

import { PreviewTemplateWrapper } from '../../components/Layout'

const PreviewLayout = ({ children }) => {
  return <PreviewTemplateWrapper>{children}</PreviewTemplateWrapper>
}
export default PreviewLayout
