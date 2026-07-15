import { useState } from "react";
import "./CSS/gridLight.css";

const GRID_SIZE = 5;

const GridLights = () => {
  const [selectedCells, setSelectedCells] = useState(new Set());

  function handleSelection(cellNumber) {
    const row = Math.floor((cellNumber - 1) / GRID_SIZE);
    const col = (cellNumber - 1) % GRID_SIZE;

    const cellsToToggle = [cellNumber];

    // Left
    if (col > 0) cellsToToggle.push(cellNumber - 1);

    // Right
    if (col < GRID_SIZE - 1) cellsToToggle.push(cellNumber + 1);

    // Top
    if (row > 0) cellsToToggle.push(cellNumber - GRID_SIZE);

    // Bottom
    if (row < GRID_SIZE - 1) cellsToToggle.push(cellNumber + GRID_SIZE);

    setSelectedCells((prev) => {
      const updated = new Set(prev);

      cellsToToggle.forEach((cell) => {
        if (updated.has(cell)) {
          updated.delete(cell);
        } else {
          updated.add(cell);
        }
      });

      return updated;
    });
  }

  const rows = [];

  for (let i = 0; i < GRID_SIZE; i++) {
    const cells = [];

    for (let j = 0; j < GRID_SIZE; j++) {
      const cellNumber = i * GRID_SIZE + j + 1;

      cells.push(
        <td
          key={j}
          className={`td ${selectedCells.has(cellNumber) ? "selected" : ""}`}
          onClick={() => handleSelection(cellNumber)}
        >
          {cellNumber}
        </td>
      );
    }

    rows.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div className="container">
      <h2>Grid Lights</h2>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default GridLights;
