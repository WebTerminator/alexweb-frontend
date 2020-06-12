import styled from "styled-components";
import { mediaQ } from "../Style";

export const LinkShare = styled.a`
  margin-right: 0.8rem;

  @media ${mediaQ.maxMedium} {
    margin: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  padding: 10px 0;
`;
