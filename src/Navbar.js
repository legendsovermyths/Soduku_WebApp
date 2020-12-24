import React from "react";
import "./Navbar.css";
import Button from "@material-ui/core/Button";

function Navbar() {
  return (
    <div className='Navbar'>
      <div>
        <h1>Sudoku</h1>
      </div>
      <div className='Navbar__Sidemenu'>
        <Button variant='contained' color='primary' disableElevation>
          Play
        </Button>
        <Button variant='contained' color='primary' disableElevation>
          Solve
        </Button>
        <Button variant='contained' color='primary' disableElevation>
          P vs P
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
