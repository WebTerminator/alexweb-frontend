import React from "react";
import { HomePageTitle } from "../Style";
import { Button, ProfileImg, Wrapper, MotionDiv } from "./style";
import { BASE_API_URL, isDevelopment } from "../../api";
import { motion } from "framer-motion";
import Image from "../Img";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

let easing = [0.6, -0.05, 0.01, 0.99];

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
  const imgUrl = isDevelopment ? `${BASE_API_URL}${url}` : url;

  return (
    <motion.div
      style={{ height: "100%" }}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Wrapper variants={stagger}>
        <ProfileImg variants={fadeInUp}>
          <Image alt={alternativeText} url={imgUrl} />
        </ProfileImg>

        <MotionDiv variants={fadeInUp}>
          <HomePageTitle>
            <span>Hi it's Alessandro Santese here</span>
            <span>
              and I can help your business flourish using the latest front-end
              technologies to deliver the best solution to the problem
            </span>
          </HomePageTitle>
        </MotionDiv>

        <MotionDiv variants={fadeInUp}>
          <Button href="mailto:as-web@hotmail.com">Let's work together</Button>
        </MotionDiv>
      </Wrapper>
    </motion.div>
  );
};

export default Main;
