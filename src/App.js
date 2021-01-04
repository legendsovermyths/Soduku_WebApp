import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import SudokuGrid from "./SudokuGrid";
import { generateSudoku } from "./AlgorithmsUtil";

function App() {
  var grid = Array(9)
    .fill()
    .map(() => Array(9).fill(0));
  grid = generateSudoku(grid, 51);
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='sudokubar'>
        <div className='sudoku'>
          <SudokuGrid grid={grid}></SudokuGrid>
        </div>
      </div>
    </div>
  );
}

export default App;
