import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { descriptionAnimation } from "../animation";

const MeditationPage = () => {
  return (
    <StyledMeditationPageContainer
      initial="hidden"
      animate="show"
      variants={descriptionAnimation}
    >
      <h1>Release yourself</h1>
    </StyledMeditationPageContainer>
  );
};

const StyledMeditationPageContainer = styled(motion.div)`
  h1 {
    font-size: 3rem;
  }
  width: 90%;
  margin: auto;
  height: 65vh;
  display: flex;
  align-items: center;
`;
export default MeditationPage;
