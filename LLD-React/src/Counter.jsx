import React, { useState } from "react";
import "../src/CSS/counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncreament = () => {
        setCount(count + 1);
    };
    const handleDecreament = () => {
        if (count > 0) setCount(count - 1);
    };
    const handleReset = () => {
        setCount(0);
    };
    return (
        <div
            className="
        container
      "
        >
            <h1
                className="
          titlecount
        "
            >
                Counter
            </h1>
            <p
                className="
          count
        "
            >
                {count}
            </p>
            <div
                className="
          button-group
        "
            >
                <button
                    onClick={handleIncreament}
                    className="
            button increment
          "
                >
                    +
                </button>
                <button
                    onClick={handleDecreament}
                    className="
            button decrement
          "
                >
                    -
                </button>
                <button
                    onClick={handleReset}
                    className="
            button reset
          "
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
