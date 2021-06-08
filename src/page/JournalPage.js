import React, { useEffect, useState, useRef } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { motion } from "framer-motion";

const JournalPage = () => {
  const [input, setInput] = useState(localStorage.getItem("journalEntry"));

  const onChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    console.log("render");
    localStorage.setItem("journalEntry", input);
  }, [input]);

  return (
    <div className="pageContainer">
      <StyledJournalNav>
        <h1>My Journal</h1>
        <FontAwesomeIcon className="check-mark" icon={faCheck} />
        <FontAwesomeIcon className="trash-can" icon={faTrashAlt} />
        <StyledBars>
          <FontAwesomeIcon className="bars" size="2x" icon={faBars} />
        </StyledBars>
      </StyledJournalNav>
      <StyledTextArea>
        <textarea
          name=""
          id=""
          cols="180"
          rows="10"
          onChange={onChange}
        ></textarea>
        <p>{input}</p>
        <StyledAddButton>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Journal!
          </motion.button>
        </StyledAddButton>
      </StyledTextArea>
    </div>
  );
};

const StyledAddButton = styled(motion.div)`
  button {
    font-family: "Alata", sans-serif;
    color: white;
    margin-top: 1rem;
    padding: 1rem 4rem;
    border-radius: 20px;
    border: none;
    background: #005a8d;
  }
`;

const StyledTextArea = styled(motion.div)`
  padding-top: 1rem;
  width: 90%;
  margin: auto;
  textarea {
    border: none;
    border-radius: 10px;
    font-family: "Alata", sans-serif;
    width: 100%;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1),
      0px 20px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StyledBars = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 78%;
`;

const StyledJournalNav = styled(motion.div)`
  align-items: center;
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 2rem;
  h1 {
    font-size: 3rem;
  }
  .trash-can {
    cursor: pointer;
    margin-top: 1rem;
  }
  .check-mark {
    margin-left: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    margin-right: 1rem;
  }
  .background-color {
  }
  .bars {
    cursor: pointer;
  }
`;

export default JournalPage;
