import styled from "styled-components";
import { mediaQ } from "../Style";

export const ProjectWrapper = styled.div`
  margin-bottom: 50px;
  width: 100%;

  @media ${mediaQ.medium} {
    width: 70%;
  }

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 10px;
    width: 70%;

    border-bottom: 4px solid #e81114;

    a {
      color: #e81114;
      text-decoration: none;
      transition: color 0.2s linear;
    }
  }

  p {
    margin-bottom: 20px;

    &:last-child {
      font-weight: 500;
    }

    a {
      color: #e81114;
      text-decoration: none;
    }
  }
`;
