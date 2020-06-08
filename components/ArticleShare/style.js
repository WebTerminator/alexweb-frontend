import styled from "styled-components";
import { mediaQ } from "../Style";

export const Wrapper = styled.div`
  max-width: 100%;
  margin-bottom: 20px;
  padding: 20px;

  @media ${mediaQ.large} {
    max-width: 50vw;
    padding: 30px;
  }

  background-color: #ececec;
  border: 1px solid #d6d6d6;
  border-radius: 4px;

  & > button {
    margin-right: 10px;
  }
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
`;
