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

  span {
    display: block;
  }
`;
