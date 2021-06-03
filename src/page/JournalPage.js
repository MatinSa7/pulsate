import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { motion } from "framer-motion";

const JournalPage = () => {
  return (
    <div className="pageContainer">
      <StyledJournalNav>
        <FontAwesomeIcon size="2x" icon={faBars} />
        <h1>My Journal</h1>
        <FontAwesomeIcon className="check-mark" icon={faCheck} />
        <FontAwesomeIcon className="trash-can" icon={faTrashAlt} />
        <h2 className="background-color">background-color</h2>
      </StyledJournalNav>
    </div>
  );
};

const StyledJournalNav = styled(motion.div)`
  align-items: center;
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 2rem;
  h1 {
    padding-left: 2rem;
    font-size: 3rem;
  }
  .trash-can {
    margin-top: 1rem;
    margin-left: 3rem;
  }
  .check-mark {
    margin-top: 1rem;
    margin-left: 3rem;
  }
  .background-color {
    padding-left: 40rem;
  }
`;

export default JournalPage;
