import React, { useEffect, useRef, useState } from "react";
import "./CSS/multiSelect.css";

const cars = [
  "Lambo",
  "Thar",
  "Urban Cruiser",
  "Alto",
  "BE 6",
  "XUV 700",
  "XUV 300",
  "Tiago",
  "C-Class Benz",
];

const MultiSelectDropdown = () => {
  const [selectedCars, setSelectedCars] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const dropdownRef = useRef(null);

  const filteredCars = cars.filter((car) =>
    car.toLowerCase().includes(search.toLowerCase())
  );

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  function handleSelection(car) {
    setSelectedCars((prev) =>
      prev.includes(car) ? prev.filter((item) => item !== car) : [...prev, car]
    );
  }

  function handleSelectAll() {
    if (selectedCars.length === cars.length) {
      setSelectedCars([]);
    } else {
      setSelectedCars(cars);
    }
  }

  function clearAll() {
    setSelectedCars([]);
  }
  return (
    <div className="container" ref={dropdownRef}>
      <h2>Multi Select Dropdown</h2>

      <div className="dropdown" onClick={toggleDropdown}>
        {selectedCars.length ? selectedCars.join(", ") : "Choose Cars"}
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <input
            className="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="actions">
            <button onClick={handleSelectAll}>
              {selectedCars.length === cars.length
                ? "Unselect All"
                : "Select All"}
            </button>

            <button onClick={clearAll}>Clear</button>
          </div>

          {filteredCars.map((car) => (
            <label key={car} className="option">
              <input
                type="checkbox"
                checked={selectedCars.includes(car)}
                onChange={() => handleSelection(car)}
              />
              {car}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
