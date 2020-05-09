import React, { useState } from 'react'
import Aside from '../SideBar'
import Email from '../Email'
import Header from '../Header'
import {
  Main,
  Wrapper
} from './style'

const Layout = ({ children, bio }) => {
  const [isSideOpen, setIsSideOpen] = useState(false)
  const hadnleIsSideOpen = () => setIsSideOpen(!isSideOpen)

  return (
    <Wrapper>
      <Header hadnleIsSideOpen={hadnleIsSideOpen} />
      <Aside bio={bio} isOpen={isSideOpen} />
      <Main>
        {children}
      </Main>
      <Email />
    </Wrapper>
  )
}

export default Layout