import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import JournalEntry from "./JournalEntry";

const JournalLibrary = ({ libraryStatus }) => {
  return (
    <StyledLibraryWrapper>
      <div className={`library ${libraryStatus ? "active-library" : ""}`}>
        <h2>My Journal Entries</h2>
        <StyledJournalEntries>
          {Object.keys(localStorage).map((key, index) => (
            <JournalEntry date={key} title="bob" />
          ))}
        </StyledJournalEntries>
      </div>
    </StyledLibraryWrapper>
  );
};

const StyledJournalEntries = styled(motion.div)``;

const StyledLibraryWrapper = styled(motion.div)`
  .library {
    position: fixed;
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    box-shadow: 2px 2px 50px rgb(201, 201, 201);
    overflow: scroll;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    opacity: 0;
  }

  .active-library {
    transform: translateX(0);
    opacity: 1;
    background: white;
  }

  h2 {
    width: 90%;
    margin: auto;
  }
`;

export default JournalLibrary;
