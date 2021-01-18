import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import SudokuGrid from "./SudokuGrid";
import HomePage from "./HomePage";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
