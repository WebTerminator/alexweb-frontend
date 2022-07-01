import React from "react";
import Logo from "../Logo";
import Nav from "../Navigation";
import SideBarShare from "../SideBarShare";
import { BioWrapper, Copyright, Wrapper } from "./style";
import Cv from "../Cv";

const Aside = (props) => {
  const { isOpen, isNavVisible = true, isSocialVisible = true } = props;
  return (
    <Wrapper
      initial={{ left: "-100%" }}
      animate={{ left: isOpen ? 0 : "-100%" }}
      exit={{ left: "-100%" }}
    >
      <Logo />
      {isNavVisible && <Nav />}
      {isSocialVisible &&
        <BioWrapper>
          <SideBarShare />
          <Cv sideButton />
        </BioWrapper>
      }
      <Copyright>Copyright © 2022 AlexWeb LTD</Copyright>
    </Wrapper>
  );
};

export default Aside;
