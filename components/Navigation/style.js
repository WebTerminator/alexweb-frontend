import styled from "styled-components";
import { mediaQ } from "../Style";

export const Navigation = styled.nav`
  margin-bottom: 3.5rem;

  @media ${mediaQ.maxMedium} {
    text-align: center;
  }
`;

export const NavLink = styled.a`
  position: relative;

  color: #fff;
  text-transform: uppercase;
  display: block;
  font-size: 1.7rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 10px;

  &.active {
    font-size: 2.2rem;

    @media ${mediaQ.maxMedium} {
      font-size: 2.2rem;

      &:before {
        display: none;
      }
    }

    &:before {
      content: "";
      position: absolute;
      right: -23px;
      top: 11px;
      width: 0px;
      height: 0px;
      border-style: inset;
      border-width: 0 17.5px 30px 17.5px;
      border-color: transparent transparent #ffffff transparent;
      float: left;
      transform: rotate(270deg);
    }
  }
`;
