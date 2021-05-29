import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import meditationlogo from "../icon/meditationlogo.svg";

const StyledNav = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  min-height: 15vh;
`;
const StyledLogoContainer = styled(motion.div)`
  display: flex;
  flex: 1 1 20rem;
  img {
    height: 64px;
    width: 64px;
  }
`;
const StyledNavLinks = styled(motion.ul)`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 20rem;
  list-style: none;
  a {
    text-decoration: none;
    color: black;
  }
  li {
    padding-left: 5rem;
  }
`;

const StyledNavLine = styled(motion.div)`
  border-bottom: 6px solid #005a8d;
`;

const Nav = () => {
  return (
    <>
      <StyledNav>
        <StyledLogoContainer id="logo">
          <img src={meditationlogo} alt="" />
          <h1>Pulsate</h1>
        </StyledLogoContainer>
        <StyledNavLinks>
          <li>
            <a href="">Journal</a>
          </li>
          <li>
            <a href="">Work Session</a>
          </li>
          <li>
            <a href="">Meditation</a>
          </li>
        </StyledNavLinks>
      </StyledNav>
      <StyledNavLine
        transition={{ duration: 1 }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
      ></StyledNavLine>
    </>
  );
};

export default Nav;
