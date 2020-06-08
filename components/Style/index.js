import styled from "styled-components";

export const mediaQ = {
  maxLarge: `(max-width: 1119px)`,
  large: `(min-width: 1200px)`,
  medium: `(min-width: 800px)`,
  maxMedium: `(max-width: 799px)`,
};

export const Title = styled.h1`
  margin-bottom: 5rem;
  font-weight: 800;

  a {
    color: #e81114;
    text-decoration: none;
  }

  span {
    display: block;
  }
`;
