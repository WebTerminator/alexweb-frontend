import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../Style";

export const Wrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }
`;

export const ProfileImg = styled(motion.div)`
  max-width: 13rem;

  img {
    border-radius: 50%;
  }
`;

export const MotionDiv = styled(motion.div)``;

export const Button = styled.a`
  text-decoration: none;
  transition: all 0.3s ease-in;
  display: block;

  border: 2px solid ${colors.brandPrimary};
  color: ${colors.brandPrimary};
  text-transform: uppercase;
  font-weight: 500;
  padding: 14px 24px;

  &:hover {
    background-color: ${colors.brandPrimary};
    color: #fff;
  }
`;
