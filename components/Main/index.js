import React from "react";
import { Title } from "../Style";
import { ProfileImg, Wrapper } from "./style";
import SideBarShare from "../SideBarShare";
import Cv from "../Cv";
import { BASE_API_URL } from "../../api";

const Main = ({ profile }) => {
  return (
    <Wrapper>
      <ProfileImg>
        <img src={`${BASE_API_URL}${profile.url}`} />
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
