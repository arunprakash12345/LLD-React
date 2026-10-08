import React from "react";

const Interests = ({ data, setData }) => {
  const { interests } = data;

  const handleChange = (e, interest) => {
    if (e.target.checked) {
      setData((prevData) => ({
        ...prevData,
        interests: [...prevData.interests, interest],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        interests: prevData.interests.filter((i) => i !== interest),
      }));
    }
  };

  return (
    <div className="interests">
      <label>
        <input
          type="checkbox"
          checked={interests.includes("Music")}
          onChange={(e) => handleChange(e, "Music")}
        />
        Music
      </label>

      <label>
        <input
          type="checkbox"
          checked={interests.includes("Riding")}
          onChange={(e) => handleChange(e, "Riding")}
        />
        Riding
      </label>

      <label>
        <input
          type="checkbox"
          checked={interests.includes("Coding")}
          onChange={(e) => handleChange(e, "Coding")}
        />
        Coding
      </label>
    </div>
  );
};

export default Interests;
