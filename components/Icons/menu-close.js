import React from 'react'
import { MenuCloseImg } from './style'

const MenuCloseSVG = ({ onClick }) =>
  <MenuCloseImg onClick={onClick} src="/menu-close.svg" alt="menu close icon" />

export default MenuCloseSVG