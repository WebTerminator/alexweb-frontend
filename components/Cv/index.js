import React from "react";
import { uploads } from "../../api";
import { LinkToCv } from "./style";

const Cv = ({ sideButton }) => (
  <LinkToCv
    className={sideButton && "side-button"}
    href={uploads.cv}
    target="_blank"
    rel="noreferrer"
  >
    Download cv
  </LinkToCv>
);

export default Cv;
