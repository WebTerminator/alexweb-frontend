import React, { useState } from 'react'
import MenuSVG from '../Icons/menu'
import MenuCloseSVG from '../Icons/menu-close'
import LogoMobileSVG from '../Icons/logoMobile'
import { Wrapper } from './style'

const Header = ({ hadnleIsSideOpen }) => {
  const [isOpen, setIsOpen] = useState(true)
  const hanldeMenuToggle = () => {
    setIsOpen(!isOpen)
    hadnleIsSideOpen()
  }

  return (
    <Wrapper>
      <LogoMobileSVG />
      {
        isOpen
          ? <MenuSVG onClick={hanldeMenuToggle} />
          : <MenuCloseSVG onClick={hanldeMenuToggle} />
      }
    </Wrapper>
  )
}

export default Header