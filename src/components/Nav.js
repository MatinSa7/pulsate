import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import meditationlogo from "../icon/meditationlogo.svg";
import { fade } from "../animation";

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
  a {
    font-size: 2rem;
    font-weight: bolder;
    padding-top: 0.8rem;
    color: black;
    text-decoration: none;
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
      <StyledNav initial="hidden" animate="show" variants={fade}>
        <StyledLogoContainer
          whileHover={{ scale: 1.02, transition: { duration: 2 } }}
          whileTap={{ scale: 0.9 }}
          id="logo"
        >
          <img src={meditationlogo} alt="" />
          <a href="/pulsate">Pulsate</a>
        </StyledLogoContainer>
        <StyledNavLinks>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="/Journal">Journal</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="">Work Session</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="">Meditation</a>
          </motion.li>
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
