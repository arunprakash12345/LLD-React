import React, { useState } from 'react';
import './CSS/columnTable.css';


const ColumnTable = () => {
    const [colSize, setcolSize] = useState(2);
    const [rowSize, setrowSize] = useState(2);
    function handleColsize(e) {
        const value = Number(e.target.value);
        setcolSize(value);
    }
    function handleRowsize(e) {
        const value = Number(e.target.value);
        setrowSize(value);
    }
    function createTable() {
        let tab = [];
        for (let i = 0; i < rowSize; i++) {
            let rows = [];
            for (let j = 0; j < colSize; j++) {
                const key = `${i}-${j}`;
                rows.push(
                    <td className="table-data1" key={key} data-key={key}>{key}</td>
                );
            }
            tab.push(
                <tr key={i}>{rows}</tr>
            )
            // console.log(tab);
        }
        return tab;
    }
    const tableRows = createTable();
    return (
        <div className="table-container">
            <div className="input-container">
                <div className="control">
                    <label htmlFor="colsize">Column Size: {colSize}</label>
                    <input
                        id="colsize"
                        name="colsize"
                        type="range"
                        min="2"
                        max="10"
                        value={colSize}
                        onChange={handleColsize}
                    /></div>
                <div className="control">
                    <label htmlFor="rowSize">Row Size: {rowSize}</label>
                    <input
                        id="rowsize"
                        type="range"
                        min="2"
                        max="10"
                        value={rowSize}
                        onChange={handleRowsize}
                    /></div>
            </div>
            <table className="table">
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    )
}

export default ColumnTable
