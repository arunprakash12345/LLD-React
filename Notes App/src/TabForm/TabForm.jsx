import React, { use, useState } from "react";
import Personal from "./Personal";
import Interests from "./Interests";
import Settings from "./Settings";
import "./tabForm.css";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Arun",
    age: 25,
    email: "arunprakash74119@gmail.com",
    interests: ["Music", "Travelling", "Coding"],
    theme: "Dark",
  });
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    interests: "",
  });
  const tabConfig = [
    {
      name: "Personal",
      component: Personal,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const ActiveComponent = tabConfig[activeTab].component;
  function handleNext() {
    const hasErrors = handleError();

    if (hasErrors) return;
    setActiveTab((prevTab) => (prevTab + 1) % tabConfig.length);
  }
  function handlePrevious() {
    const hasErrors = handleError();

    if (hasErrors) return;
    setActiveTab((prevTab) => (prevTab - 1) % tabConfig.length);
  }
  function handleSubmit() {
    handleError();
    if (errors.length > 0) return;
    alert("Form submitted successfully!!");
  }

  function handleError() {
    if (activeTab === 0) {
      if (data.name.length < 3) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "Name is not valid",
        }));
      }
      if (data.age < 18) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          age: "age is not valid",
        }));
      }
      if (data.email.length < 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is not valid",
        }));
      }
    } else if (activeTab === 2) {
      if (data.interests.length < 1) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          interests: "Select Atleast one interests",
        }));
      }
    }
  }
  return (
    <div>
      <div className="tab-headers">
        {tabConfig.map((tab, index) => {
          return (
            <button
              className={`tabs ${index === activeTab ? "active" : ""}`}
              key={index}
              aria-label={tab.name}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      <div className="tab-body">
        <ActiveComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="tab-footer">
        {activeTab > 0 && <button onClick={handlePrevious}>Previous</button>}
        {activeTab < tabConfig.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {activeTab === tabConfig.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
