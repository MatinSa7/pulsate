import React from "react";
import { motion } from "framer-motion";
import { descriptionAnimation } from "../animation";
import styled from "styled-components";

const MeditationTrack = () => {
  return (
    <StyledMeditationTrackContainer>
      <video controls name="media">
        <source
          src="https://assets.ctfassets.net/v3n26e09qg2r/1klC4Z7WVcQIi0c4w86sCM/9f9afe86cc0df9eaa7450f9cfdf0e9cd/pack_basics_level_1_s1_3m_en_20170320.mp3"
          type="audio/mpeg"
        />
      </video>
    </StyledMeditationTrackContainer>
  );
};

const StyledMeditationTrackContainer = styled(motion.div)`
  video {
    width: 60vw;
    height: 10vh;
  }
`;
export default MeditationTrack;
