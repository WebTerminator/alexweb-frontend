import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  ArtcilePreview,
  Img,
  ImgWrapper,
  PublishedDate,
  TextWrapper,
  Title,
  Wrapper,
} from "./style";
import { BASE_API_URL } from "../../api";

const Card = ({ data }) => {
  const {
    intro,
    preview: { url },
    slug,
    title,
  } = data;

  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <Wrapper>
        <ImgWrapper>
          <Img src={url} />
        </ImgWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <ArtcilePreview>{intro}</ArtcilePreview>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    intro: PropTypes.string,
    preview: PropTypes.shape({
      url: PropTypes.string,
    }),
    slug: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Card;
