import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import SudokuGrid from "./SudokuGrid";
import HomePage from "./HomePage";
import SodukoSolve from "./SodukoSolve";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact={true}>
            <HomePage></HomePage>
          </Route>
          <Route path='/play' exact={true}>
            <SudokuGrid></SudokuGrid>
          </Route>
          <Route path='/solve' exact={true}>
            <SodukoSolve></SodukoSolve>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
