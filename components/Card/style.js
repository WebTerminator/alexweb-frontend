import styled from "styled-components";
import { mediaQ } from "../Style";

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  flex-direction: column;

  @media ${mediaQ.medium} {
    flex-direction: row;
  }

  @media ${mediaQ.large} {
    max-width: 70%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  flex: 2;
  max-width: 300px;
  margin: 0 auto;

  @media ${mediaQ.medium} {
    margin: 0;
  }
`;

export const TextWrapper = styled.div`
  flex: 6;
  padding: 20px 0 0 0;

  @media ${mediaQ.medium} {
    padding: 0 40px 40px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-weight: 800;
`;

export const PublishedDate = styled.p`
  font-size: 0.9rem;

  span {
    &:nth-child(2) {
      font-weight: 500;
      margin-left: 5px;
    }
  }
`;

export const ArtcilePreview = styled.p`
  margin-bottom: 30px;
`;
