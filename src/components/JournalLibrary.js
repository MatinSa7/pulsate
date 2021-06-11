import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import JournalEntry from "./JournalEntry";

const JournalLibrary = ({ libraryStatus }) => {
  return (
    <div className={`library${libraryStatus ? "active-library" : ""}`}>
      <h2>My Journal Entries</h2>
      <StyledJournalEntries>
        {Object.keys(localStorage).map((key, index) => (
          <JournalEntry date={key} title="bob" />
        ))}
      </StyledJournalEntries>
    </div>
  );
};

const StyledJournalEntries = styled(motion.div)``;

export default JournalLibrary;
