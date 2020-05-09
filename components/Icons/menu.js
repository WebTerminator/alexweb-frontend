import React from 'react'
import { MenuImg } from './style'

const MenuSVG = ({ onClick }) =>
  <MenuImg onClick={onClick} src="/menu.svg" alt="menu icon" />

export default MenuSVG