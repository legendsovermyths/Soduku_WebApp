import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import SudokuGrid from "./SudokuGrid";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='sudokubar'>
        <div className='sudoku'>
          <SudokuGrid></SudokuGrid>
        </div>
      </div>
    </div>
  );
}

export default App;
