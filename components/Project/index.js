import React from "react";
import ReactMarkdown from "react-markdown";
import { ProjectWrapper } from "./style";

const Project = ({ source }) => (
  <ProjectWrapper>
    <ReactMarkdown linkTarget="_blank" source={source} />
  </ProjectWrapper>
);

export default Project;
