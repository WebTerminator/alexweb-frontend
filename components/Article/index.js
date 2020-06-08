import React from "react";
import ReactMarkdown from "react-markdown";
import { Title } from "../Style";
import { Wrapper } from "./style";

const Article = ({ content, title }) => (
  <Wrapper>
    <Title>{title}</Title>
    <ReactMarkdown source={content} />
  </Wrapper>
);

export default Article;
