import React, { useState } from "react";
import MenuSVG from "../Icons/menu";
import MenuCloseSVG from "../Icons/menu-close";
import LogoMobileSVG from "../Icons/logoMobile";
import { LogoMobileWrapper, Wrapper } from "./style";
import Link from "next/link";

const Header = ({ hadnleIsSideOpen }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hanldeMenuToggle = () => {
    setIsOpen(!isOpen);
    hadnleIsSideOpen();
  };

  return (
    <Wrapper>
      <Link href="/">
        <LogoMobileWrapper>
          <LogoMobileSVG />
        </LogoMobileWrapper>
      </Link>
      {isOpen ? (
        <MenuSVG onClick={hanldeMenuToggle} />
      ) : (
        <MenuCloseSVG onClick={hanldeMenuToggle} />
      )}
    </Wrapper>
  );
};

export default Header;
