import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;

  function handleChange(selectedTheme) {
    setData((prevData) => ({
      ...prevData,
      theme: selectedTheme,
    }));
  }

  return (
    <div>
      <label>
        <input
          type="radio"
          name="theme"
          onChange={() => handleChange("Dark")}
          checked={theme === "Dark"}
        />
        Dark
      </label>

      <label>
        <input
          type="radio"
          name="theme"
          onChange={() => handleChange("Light")}
          checked={theme === "Light"}
        />
        Light
      </label>
    </div>
  );
};

export default Settings;
