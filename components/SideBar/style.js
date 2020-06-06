import styled from "styled-components";
import { mediaQ } from "../Style";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.aside)`
  background-color: black;

  @media ${mediaQ.maxMedium} {
    position: fixed;
    width: 100%;
    transition: all 0.5s linear;
    top: 7rem;
    height: 100%;
    padding: 0 20px 40px;
    postion: relative;
  }

  @media ${mediaQ.medium} {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
  }
`;

export const BioText = styled.p`
   {
    color: #fff;
    font-size: 1rem;
    line-height: 1.4rem;
    margin-bottom: 20px;
  }
`;

export const BioWrapper = styled.div`
  @media ${mediaQ.maxMedium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: #fff;
  font-size: 0.8rem;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
