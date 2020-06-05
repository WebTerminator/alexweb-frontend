import React from "react";
import { Title } from "../Style";
import { ProfileImg, Wrapper } from "./style";
import SideBarShare from "../SideBarShare";
import Cv from "../Cv";
import { BASE_API_URL, isDevelopment } from "../../api";

const Main = ({ profile }) => {
  const url = isDevelopment ? `${BASE_API_URL}${profile.url}` : profile.url;

  return (
    <Wrapper>
      <ProfileImg>
        <img src={url} />
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
