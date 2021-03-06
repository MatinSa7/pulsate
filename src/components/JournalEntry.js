import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const JournalEntry = ({ date, title }) => {
  return (
    <StyledCardContainer>
      <h3>{date}</h3>
      <p>{title}</p>
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled(motion.div)`
  cursor: pointer;
  margin-top: 2rem;
  width: 25vw;
  height: 10vh;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1), 0px 20px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  h3,
  p {
    width: 90%;
    margin: auto;
    padding-top: 1.3vh;
  }
`;
export default JournalEntry;
