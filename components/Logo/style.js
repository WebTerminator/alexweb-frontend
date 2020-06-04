import styled from "styled-components";
import { mediaQ } from "../Style";

export const Wrapper = styled.div`
  margin-bottom: 8rem;

  @media ${mediaQ.medium} {
    background-color: transparent;
    position: relative;
    top: -4px;
    left: -4px;

    > svg {
      width: 80%;
    }
  }
`;

export const LogoImg = styled.img`
  @media ${mediaQ.maxMedium} {
    display: none;
  }
  cursor: pointer;
  width: 15rem;
`;
