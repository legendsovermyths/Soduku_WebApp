import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import SudokuGrid from "./SudokuGrid";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='sudokubar'>
        <div className='sudoku'>
          <SudokuGrid></SudokuGrid>
        </div>
        <div className='timer'>
          <Button variant='contained' color='primary' disableElevation>
            Solve
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
