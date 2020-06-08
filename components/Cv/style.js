import styled from "styled-components";
import { colors } from "../Style";

export const LinkToCv = styled.a`
  text-decoration: none;
  transition: all 0.2s ease-out;
  margin: 10px 0;

  border: 2px solid ${colors.brandPrimary};
  color: ${colors.brandPrimary};
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 20px;

  &:hover {
    background-color: ${colors.brandPrimary};
    color: #fff;
  }

  &.side-button {
    display: inline-block;
    color: white;
    border: 2px solid white;
    font-size: 0.9rem;
    padding: 8px 12px;
    width: auto;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;
