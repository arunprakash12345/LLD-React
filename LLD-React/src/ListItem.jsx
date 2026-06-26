import React from "react";

const ListItem = ({ task }) => {
  return (
    <div>
      <p>{task}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default ListItem;
