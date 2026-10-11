import React from "react";

const Personal = ({ data, setData, errors }) => {
  const { name, age, email } = data;
  const handleChange = (e, field) => {
    setData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };
  const { name: nameError, age: ageError, email: emailError } = errors;
  return (
    <div className="personal">
      <h1>Personal Information</h1>
      <label>
        Name :
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {nameError && <span className="error">{nameError}</span>}
      </label>
      <label>
        Age :
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
        {ageError && <span className="error">{ageError}</span>}
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        {emailError && <span className="error">{emailError}</span>}
      </label>
    </div>
  );
};

export default Personal;
