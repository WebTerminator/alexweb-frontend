import styled from "styled-components";
import { colors, mediaQ } from "../Style";

export const Wrapper = styled.div`
  width: 100%;

  @media ${mediaQ.xLarge} {
    width: 70%;
  }

  h2 {
    margin: 50px 0 10px 0;
    font-weight: 800;
  }

  h3 {
    font-weight: 500;
    margin: 20px 0 8px 0;
  }

  p {
    margin-bottom: 0.5rem;

    @media ${mediaQ.maxLarge} {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    &:last-of-type {
      margin-bottom: 50px;
    }
  }

  img {
    max-width: 180px;
    float: left;
    padding: 0 20px 10px 0;
  }

  li {
    font-size: 1.2rem;

    p {
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: ${colors.brandPrimary};
    text-decoration: none;
  }
`;
