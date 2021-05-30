import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const WaveAnimation = () => {
  return (
    <StyledWave
      width="1920"
      height="615"
      viewBox="0 0 1920 615"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 3 }}
        d="M-0.5 554.5C190.333 354 619.1 0.100006 807.5 188.5C995.9 376.9 1043 549.667 1043 612.5C1237.83 258.167 1690.8 -311.7 1924 221.5"
        strokeWidth="7"
        stroke="#005A8D"
        opacity="0.5"
      />
    </StyledWave>
  );
};

const StyledWave = styled(motion.svg)`
  width: 100%;
  position: absolute;
  left: 0;
  z-index: -100;
`;

export default WaveAnimation;
