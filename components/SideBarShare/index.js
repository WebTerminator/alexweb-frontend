import React from 'react'
import {
  LinkedinIcon,
  TwitterIcon
} from 'react-share'
import { LinkShare, Wrapper } from './style'

const SideBarShare = () =>
  <Wrapper>
    <LinkShare href="https://twitter.com/AsWeb85" target="_blank">
      <TwitterIcon size={32} round={true} />
    </LinkShare>
    <LinkShare href="https://www.linkedin.com/in/as-web/" target="_blank">
      <LinkedinIcon size={32} round={true} />
    </LinkShare>
  </Wrapper>

export default SideBarShare