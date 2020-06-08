import React from "react";
import { Title } from "../Style";
import { ProfileImg, Wrapper, MotionDiv } from "./style";
import SideBarShare from "../SideBarShare";
import Cv from "../Cv";
import { BASE_API_URL, isDevelopment } from "../../api";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Main = ({ profile }) => {
  const { alternativeText, url } = profile;
  const url = isDevelopment ? `${BASE_API_URL}${url}` : url;

  return (
    <motion.div
      style={{ height: "100%" }}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Wrapper variants={stagger}>
        <ProfileImg variants={fadeInUp}>
          <img alt={alternativeText} src={url} />
        </ProfileImg>

        <MotionDiv variants={fadeInUp}>
          <Title>
            <span>Alessandro Santese is a Sutton based </span>
            freelance web developer with 10 years of experience
          </Title>
        </MotionDiv>

        <MotionDiv variants={fadeInUp}>
          <SideBarShare />
        </MotionDiv>

        <MotionDiv variants={fadeInUp}>
          <Cv />
        </MotionDiv>
      </Wrapper>
    </motion.div>
  );
};

export default Main;
