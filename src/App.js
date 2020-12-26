import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import SudokuGrid from "./SudokuGrid";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <SudokuGrid></SudokuGrid>
    </div>
  );
}

export default App;
