import styled from "styled-components";
import { mediaQ } from "../Style";

export const Wrapper = styled.header`
  position: fixed;
  height: 7rem;
  background-color: #000;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  img {
    &:first-child {
      max-width: 80px;
    }
  }

  @media ${mediaQ.medium} {
    display: none;
  }
`;
