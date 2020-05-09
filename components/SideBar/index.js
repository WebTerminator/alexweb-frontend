import React from 'react'
import Logo from '../Logo'
import Nav from '../Navigation'
import SideBarShare from '../SideBarShare'
import {
  BioText,
  BioWrapper,
  Copyright,
  Wrapper
} from './style'

const Aside = props => {
  const { bio, isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      <Logo />
      <Nav />
      <BioWrapper>
        <BioText>{bio}</BioText>
        <SideBarShare />
      </BioWrapper>
      <Copyright>
        Copyright © 2020 AlexWeb LTD
      </Copyright>
    </Wrapper>
  )
}

export default Aside