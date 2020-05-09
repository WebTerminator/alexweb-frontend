import React from 'react'
import EmailSVG from '../Icons/email'
import { EmailLink, TriangleCSS } from './style'

const Email = () =>
  <>
    <TriangleCSS />
    <EmailLink href="mailto:aw@alex-web.co.uk">
      <EmailSVG />
    </EmailLink>
  </>

export default Email