import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import WaveAnimation from "../components/WaveAnimation";
import {
  descriptionAnimation,
  pageAnimation,
  SVGAnimation,
} from "../animation";
import SVGBusiness from "../components/svgBusiness";
import styles from "../";

const IntroPage = () => {
  return (
    <StyledHide>
      <StyledIntroPageContainer
        initial="hidden"
        animate="show"
        variants={pageAnimation}
      >
        <StyledDescription>
          <StyledHide>
            <motion.h1 variants={descriptionAnimation}>Plan.</motion.h1>
          </StyledHide>
          <StyledHide>
            <motion.h1 variants={descriptionAnimation}>Perform.</motion.h1>
          </StyledHide>
          <StyledHide>
            <motion.h1 className="Release" variants={descriptionAnimation}>
              Release.
            </motion.h1>
          </StyledHide>
          <StyledHide>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={descriptionAnimation}
            >
              Learn About Us!
            </motion.a>
          </StyledHide>
        </StyledDescription>
        <SVGBusiness />
        <WaveAnimation />
      </StyledIntroPageContainer>
    </StyledHide>
  );
};

const StyledIntroPageContainer = styled(motion.div)`
  display: flex;
  overflow-y: hidden;
`;

const StyledDescription = styled(motion.div)`
  flex: 1 1 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  h1 {
    font-size: calc(2rem + 2vw);
  }
  a {
    cursor: pointer;
    padding: 10rem 3rem;
    border: 2px solid #005a8d;
    border-radius: 50px;
    background: #005a8d;
    color: white;
    font-family: "Alata", sans-serif;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default IntroPage;
