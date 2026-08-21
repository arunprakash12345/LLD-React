import React, { useState, useEffect } from 'react';
import './CSS/gridLights.css'

const GridLights = () => {
    const [colSize, setColSize] = useState(3);
    const [lightArray, setLightArray] = useState([]);
    function handleColsize(e) {
        setColSize(Number(e.target.value));
    }

    const rows = [];

    for (let i = 0; i < colSize; i++) {
        const cells = [];

        for (let j = 0; j < colSize; j++) {
            const cellKey = `${i}-${j}`;
            cells.push(
                <td
                    key={`${i}-${j}`}
                    data-key={`${i}-${j}`}
                    className={`table-data ${lightArray.includes(cellKey) ? "selected" : ''}`}
                ></td>
            );
        }
        rows.push(
            <tr key={i}>
                {cells}
            </tr>
        );
    }

    function handleLights(e) {
        const key = e.target.dataset.key;
        if (lightArray.includes(key)) return;
        const updatedLights = [...lightArray, key];
        setLightArray(updatedLights);
        if (updatedLights.length === colSize * colSize) {
            console.log("Completed!");
            for (let i = 1; i <= updatedLights.length; i++) {
                setTimeout(() => {
                    setLightArray((prev) => prev.slice(0, -1));
                }, (i) * 1000);
            }
        }
    }

    return (
        <div>
            <input
                type="number"
                placeholder="Enter the Column and Row size"
                onChange={handleColsize}
                value={colSize}
            />
            <table className="grid" onClick={handleLights}>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default GridLights;