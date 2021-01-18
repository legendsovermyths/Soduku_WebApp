import React from "react";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Navbar() {
  const style = {
    textDecoration: "none",
    padding: "0px",
    margin: "0px",
  };

  return (
    <div className='Navbar'>
      <div>
        <h1>Sudoku</h1>
      </div>
      <div className='Navbar__Sidemenu'>
        <Link to='./play' style={style}>
          <Button variant='contained' color='primary' disableElevation>
            Play
          </Button>
        </Link>
        <Link style={style}>
          <Button variant='contained' color='primary' disableElevation>
            Solve
          </Button>
        </Link>
        <Link style={style}>
          <Button variant='contained' color='primary' disableElevation>
            P vs P
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
