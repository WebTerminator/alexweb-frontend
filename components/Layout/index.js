import React, { useState } from "react";
import Aside from "../SideBar";
import Email from "../Email";
import Header from "../Header";
import { Main, Wrapper } from "./style";
import { motion } from "framer-motion";

const Layout = ({ children, bio, page }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const hadnleIsSideOpen = () => setIsSideOpen(!isSideOpen);

  return (
    <Wrapper>
      <Header hadnleIsSideOpen={hadnleIsSideOpen} />
      <Aside page={page} bio={bio} isOpen={isSideOpen} />
      {page === "home" ? (
        <Main>{children}</Main>
      ) : (
        <motion.div
          style={{ height: "100%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Main>{children}</Main>
        </motion.div>
      )}
      <Email />
    </Wrapper>
  );
};

export default Layout;
