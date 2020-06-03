import styled from "styled-components";
import { mediaQ } from "../Style";

export const Navigation = styled.nav`
  @media ${mediaQ.maxMedium} {
    text-align: center;
  }
`;

export const NavLink = styled.a`
  position: relative;

  color: #fff;
  text-transform: uppercase;
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 5px;

  &.active {
    font-size: 1.6rem;

    @media ${mediaQ.maxMedium} {
      font-size: 2rem;

      &:before {
        display: none;
      }
    }

    &:before {
      content: "";
      position: absolute;
      right: -20px;
      top: 0px;
      width: 0px;
      height: 0px;
      border-style: inset;
      border-width: 0 12.5px 25px 12.5px;
      border-color: transparent transparent #ffffff transparent;
      float: left;
      transform: rotate(270deg);
    }
  }
`;
