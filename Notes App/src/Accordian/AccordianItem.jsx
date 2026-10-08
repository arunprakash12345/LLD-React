import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../index.css";

const AccordianItem = ({ item, isOpen, handleToggle }) => {
  return (
    <div className={`accordian-item`}>
      <button
        onClick={() => handleToggle(item.id)}
        className="accordian-question"
        aria-controls={`answer-${item.id}`}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        {!isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </button>
      <div
        id={`answer-${item.id}`}
        className={`accordian-answer ${isOpen ? "open" : "close"}`}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default AccordianItem;
