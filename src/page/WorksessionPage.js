import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { descriptionAnimation } from "../animation";

const WorksessionPage = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState(false);
  const [pomodoroActivate, setPomodoroActivate] = useState(false);
  const [buttonText, setButtonText] = useState("Start Pomodoro Timer!");

  const pomodoroActivater = () => {
    setPomodoroActivate(!pomodoroActivate);
    console.log(pomodoroActivate);
  };

  const buttonTextHandler = () => {
    if (pomodoroActivate === true) {
      setButtonText("Start Pomodoro Timer!");
    } else {
      setButtonText("Pause Pomodoro Timer!");
    }
  };

  useEffect(() => {
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
    <StyledWorksessionPageContainer
      initial="hidden"
      animate="show"
      variants={descriptionAnimation}
    >
      <StyledAlert>
        {message && <div>Break time! New session starts in:</div>}
      </StyledAlert>
      <StyledTimer>
        {timerMinutes} : {timerSeconds}
      </StyledTimer>

      <StyledButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          pomodoroActivater();
          buttonTextHandler();
        }}
      >
        {buttonText}
      </StyledButton>
    </StyledWorksessionPageContainer>
  );
};

const StyledWorksessionPageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTimer = styled(motion.div)`
  font-size: 6rem;
`;

const StyledAlert = styled(motion.div)`
  font-size: 3rem;
`;

const StyledButton = styled(motion.button)`
  position: absolute;
  bottom: 10%;
  padding: 1.5rem 4rem;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1), 0px 20px 20px rgba(0, 0, 0, 0.1);
  font-family: "Alata", sans-serif;
`;

export default WorksessionPage;
