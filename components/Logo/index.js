import React from 'react'
import Link from "next/link"
import {
  LogoImg,
  Wrapper
} from './style'

const Logo = () =>
  <Wrapper>
    <Link href="/">
      <LogoImg src="/logo.svg" alt="AlexWeb LTD logo" />
    </Link>
  </Wrapper>

export default Logo