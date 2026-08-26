import React, { useState } from 'react';
import './CSS/chessBoard.css'
const ChessBoard = () => {
    let rows = [];
    const [highlight, setHighlight] = useState([]);
    for (let i = 0; i < 8; i++) {
        let cell = [];
        for (let j = 0; j < 8; j++) {
            const cellKey = `${i}-${j}`;
            const temp = (i + j) % 2;
            const data = <td onClick={() => handleCellClick(i, j)} className={`cells ${temp === 1 ? "black" : ""} ${highlight.includes(cellKey) ? "highlight" : ""
                }`} key={cellKey} data-key={cellKey}>  </td>;
            cell.push(data);
        }
        const tempRow = <tr key={i}>{cell}</tr>;
        rows.push(tempRow);
    }

    function handleCellClick(row, col) {
        const highlightedCells = [`${row}-${col}`];
        const directions = [
            [-1, -1], [-1, 1], [1, -1], [1, 1]
        ];
        directions.forEach(([dr, dc]) => {
            let r = row + dr;
            let c = col + dc;
            while (r >= 0 && r < 8 && c >= 0 && c < 8) {
                highlightedCells.push(`${r}-${c}`);
                r += dr;
                c += dc;
            }
        });

        setHighlight(highlightedCells);


    }
    return (
        <div>
            <h1>Chessboard</h1>
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default ChessBoard;
