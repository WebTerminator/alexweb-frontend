import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    max-width: 70%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  flex: 2;
  max-width: 200px;
`;

export const TextWrapper = styled.div`
  flex: 6;
  padding: 0 20px 20px;

  @media only screen and (min-width: 800px) {
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
