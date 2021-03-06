import styled from "styled-components";
import { colors, mediaQ } from "../Style";
import { motion } from "framer-motion";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${mediaQ.medium} {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    align-content: center;

    height: inherit;
  }
`;

export const Main = styled(motion.section)`
  height: 100%;
  padding: 0 3rem 2rem;
  margin-top: 7rem;

  @media ${mediaQ.medium} {
    display: flex;
    flex: 7;
    flex-direction: column;
    overflow: scroll;

    height: 100%;
    padding: 40px 50px;
    margin: 0;
  }
`;

export const TriangleCSS = styled.div`
  width: 0px;
  height: 0px;
  border-style: inset;
  border-width: 0 100px 173.2px 100px;
  border-color: transparent transparent ${colors.brandPrimary} transparent;
  float: left;
  transform: rotate(135deg);
  position: fixed;
  bottom: -120px;
  right: -120px;
`;
