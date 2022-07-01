import React, { useState } from "react";
import Aside from "../SideBar";
import Email from "../Email";
import Header from "../Header";
import { Main, Wrapper } from "./style";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children, page, isNavVisible = true, isSocialVisible = true }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const hadnleIsSideOpen = () => setIsSideOpen(!isSideOpen);

  return (
    <Wrapper>
      <Header hadnleIsSideOpen={hadnleIsSideOpen} />
      <Aside isSocialVisible={isSocialVisible} isNavVisible={isNavVisible} page={page} isOpen={isSideOpen} />
      <AnimatePresence exitBeforeEnter>
        {page === "home" ? (
          <Main>{children}</Main>
        ) : (
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </Main>
        )}
      </AnimatePresence>
      <Email />
    </Wrapper>
  );
};

export default Layout;
