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
            <span>Hi it's Alessandro Santese here,</span>
            <span>
              I bring the latest front end technologies to help your business
              flourish.
            </span>

            <p>
              <a href="https://reactjs.org/">React </a>,
              <a href="https://redux.js.org/"> Redux </a> and
              <a href="https://www.typescriptlang.org/"> TypeScript </a>
              are the latest technologies that I use but I always keep myself up
              to date to deliver the best solution to the problem.
            </p>
          </HomePageTitle>
        </MotionDiv>

        <MotionDiv variants={fadeInUp}>
          <Button href="mailto:aw@alex-web.co.uk">Let's work together</Button>
        </MotionDiv>
      </Wrapper>
    </motion.div>
  );
};

export default Main;
