import styled from "styled-components";
import { motion } from "framer-motion";

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
