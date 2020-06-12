import styled from "styled-components";

export const mediaQ = {
  xLarge: `(min-width: 1800px)`,
  maxLarge: `(max-width: 1119px)`,
  large: `(min-width: 1200px)`,
  medium: `(min-width: 800px)`,
  maxMedium: `(max-width: 799px)`,
};

const RED = "#e81114";

export const colors = {
  brandPrimary: RED,
};

export const Title = styled.h1`
  margin-bottom: 5rem;
  font-weight: 800;

  a {
    color: ${colors.brandPrimary};
    text-decoration: none;
  }
`;

export const HomePageTitle = styled.h1`
  margin: 1rem 0;

  p {
    width: 100%;
    font-size: 1.3rem;

    @media ${mediaQ.large} {
      width: 65%;
      margin: 0 auto 2rem;
      text-align: center;
    }
  }

  a {
    color: ${colors.brandPrimary};
    text-decoration: none;
  }

  span {
    &:first-child {
      font-size: 1.3rem;
      display: block;
      font-weight: 500;
    }

    &:nth-child(2) {
      width: 100%;
      margin: 0 auto 2rem;
      display: block;
      font-size: 2rem;

      @media ${mediaQ.large} {
        width: 75%;
        font-size: 2.4rem;
      }
    }
  }
`;
