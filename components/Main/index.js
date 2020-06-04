import React from "react";
import { Title } from "../Style";
import { ProfileImg, Wrapper } from "./style";
import SideBarShare from "../SideBarShare";
import Cv from "../Cv";

const Main = () => {
  return (
    <Wrapper>
      <ProfileImg>
        <img src="https://res.cloudinary.com/ltbzulwym/image/upload/v1591117648/me_8b8bb6806c.jpg" />
      </ProfileImg>
      <Title>
        <span>Alessandro Santese is a Sutton based </span>
        freelance web developer with 10 years of experience
      </Title>
      <SideBarShare />
      <Cv />
    </Wrapper>
  );
};

export default Main;
