import React from "react";
import Link from "next/link";
import { Title } from "../Style";
import { Wrapper } from "./style";
import { uploads } from "../../api";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { objectToArray } from "../../utils";

const Main = (props) => {
  const { projects } = props;
  const projectsList = objectToArray(projects);
  return (
    <>
      <Title>
        This is a snapshot of my last 2 years working as a freelance web
        developer. For a more complete working experience please visit my
        profile on
        <a href="https://www.linkedin.com/in/as-web/" target="_blank">
          {" "}
          LinkedIn
        </a>{" "}
        or you{" "}
        <Link prefetch={false} href={`${uploads.cv}`}>
          <a>can download my CV</a>
        </Link>
        .
      </Title>
      {projectsList
        .sort((a, b) => a.sortable - b.sortable)
        .map((project, i) => (
          <Wrapper key={`id-${i}`}>
            <ReactMarkdown source={project.description} />
          </Wrapper>
        ))}
    </>
  );
};

Main.propTypes = {
  projects: PropTypes.object.isRequired,
};

export default Main;
