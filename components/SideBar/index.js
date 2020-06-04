import React from "react";
import Logo from "../Logo";
import Nav from "../Navigation";
import SideBarShare from "../SideBarShare";
import { BioText, BioWrapper, Copyright, Wrapper } from "./style";
import Cv from "../Cv";

const Aside = (props) => {
  const { bio, isOpen, page } = props;
  return (
    <Wrapper isOpen={isOpen}>
      <Logo />
      <Nav />
      {page !== "home" && (
        <BioWrapper>
          <BioText>{bio}</BioText>
          <SideBarShare />
          <Cv sideButton />
        </BioWrapper>
      )}
      <Copyright>Copyright © 2020 AlexWeb LTD</Copyright>
    </Wrapper>
  );
};

export default Aside;
