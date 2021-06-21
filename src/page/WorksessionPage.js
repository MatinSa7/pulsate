import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const WorksessionPage = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState(false);
  const [pomodoroActivate, setPomodoroActivate] = useState(false);

  const pomodoroActivater = () => {
    setPomodoroActivate(!pomodoroActivate);
    console.log(pomodoroActivate);
  };

  useEffect(() => {
    console.log("ballsack");
    if (pomodoroActivate === true) {
      let interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = message ? 24 : 4;
            let seconds = 59;

            setSeconds(seconds);
            setMinutes(minutes);
            setMessage(!message);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, pomodoroActivate]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <StyledWorksessionPageContainer>
      <StyledTimer>
        {minutes} : {seconds}
      </StyledTimer>
      <StyledAlert>
        {message && <div>Break time! New session starts in:</div>}
      </StyledAlert>
      <StyledButton onClick={pomodoroActivater}>balls</StyledButton>
    </StyledWorksessionPageContainer>
  );
};

const StyledWorksessionPageContainer = styled(motion.div)`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTimer = styled(motion.div)``;

const StyledAlert = styled(motion.div)``;

const StyledButton = styled(motion.button)``;

export default WorksessionPage;
