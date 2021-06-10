import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const JournalEntry = ({date, title }) => {
  return (
    <div className="card-container">
      <h2>{date}</h2>
      <p>{title}</p>
    </div>
  );
};

export default JournalEntry;
