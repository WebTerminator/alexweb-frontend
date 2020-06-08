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

  @media ${mediaQ.medium} {
    display: none;
  }
`;

export const LogoMobileWrapper = styled.div`
  max-width: 4.1rem;

  img {
    width: 100%;
  }
`;
