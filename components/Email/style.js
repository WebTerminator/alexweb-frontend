import styled from "styled-components";
import { colors } from "../Style";

export const TriangleCSS = styled.div`
  width: 0px;
  height: 0px;
  border-style: inset;
  border-width: 0 100px 173.2px 100px;
  border-color: transparent transparent ${colors.brandPrimary} transparent;
  float: left;
  transform: rotate(135deg);
  position: fixed;
  bottom: -100px;
  right: -120px;
`;

export const EmailLink = styled.a`
  &:hover {
    > img {
      transform: rotate(360deg);
    }
  }
`;
