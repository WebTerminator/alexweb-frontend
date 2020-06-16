import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  ArtcilePreview,
  ImgWrapper,
  PublishedDate,
  TextWrapper,
  Title,
  Wrapper,
} from "./style";
import Image from "../Img";

import { formatDate } from "../../utils";

const Card = ({ data }) => {
  const {
    intro,
    preview: { alternativeText, url },
    published,
    slug,
    title,
  } = data;

  return (
    <Wrapper>
      <ImgWrapper>
        <Image url={url} alt={alternativeText} />
      </ImgWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <PublishedDate>
          <span>Published on:</span>
          <span>{formatDate(published)}</span>
        </PublishedDate>
        <ArtcilePreview>{intro}</ArtcilePreview>
        <Link href="/blog/[slug]" as={`/blog/${slug}`}>
          <a title={title}>Read more</a>
        </Link>
      </TextWrapper>
    </Wrapper>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    intro: PropTypes.string,
    preview: PropTypes.shape({
      url: PropTypes.string,
    }),
    published: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Card;
