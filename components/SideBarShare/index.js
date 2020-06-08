import React from "react";
import { EmailIcon, LinkedinIcon, TwitterIcon } from "react-share";
import { LinkShare, Wrapper } from "./style";
import Image from "../Img";

const SideBarShare = () => (
  <Wrapper>
    <LinkShare
      href="https://twitter.com/AsWeb85"
      target="_blank"
      rel="noreferrer"
    >
      <TwitterIcon size={32} round={true} />
    </LinkShare>
    <LinkShare
      href="https://www.linkedin.com/in/as-web/"
      target="_blank"
      rel="noreferrer"
    >
      <LinkedinIcon size={32} round={true} />
    </LinkShare>
    <LinkShare href="mailto:aw@alex-web.co.uk">
      <EmailIcon size={32} round={true} />
    </LinkShare>
    <LinkShare
      href="https://github.com/WebTerminator"
      target="_blank"
      rel="noreferrer"
    >
      <Image alt="Github account" width="32px" url="/gh.svg" />
    </LinkShare>
  </Wrapper>
);

export default SideBarShare;
