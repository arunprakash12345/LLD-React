import React from "react";
import AccordianItem from "./AccordianItem";

const Accordian = ({ data }) => {
  const [openId, setOpenId] = React.useState(null);
  function handleToggle(id) {
    setOpenId((prevId) => {
      if (prevId === id) return null;
      else return id;
    });
  }
  return (
    <div>
      {data.map((item, index) => {
        return (
          <AccordianItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            handleToggle={handleToggle}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
