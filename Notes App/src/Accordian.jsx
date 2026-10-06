import React from "react";
import data from "./Data/accordianData";
import "./App.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Accordian = () => {
  const [openId, setOpenId] = React.useState(null);
  function handleOpen(id) {
    setOpenId(openId === id ? null : id);
  }
  return (
    <div>
      <div className="accordian-container">
        {data.map((item, index) => {
          return (
            <div className="accordian" key={item.id}>
              <div className="accordian-question">
                <b>{item.question}</b>
                <ChevronRightIcon
                  className={`accordian-icon ${
                    openId === item.id ? "rotate" : ""
                  }`}
                  onClick={() => handleOpen(item.id)}
                />
              </div>
              <p
                className={`chevron-answer ${
                  openId === item.id ? "open" : "close"
                }`}
              >
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
