// style={"border-collapse: collapse;"}
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./SudokuGrid.css";
import { isValid, generateSudoku, solveSudoku } from "./AlgorithmsUtil";
import Timer from "./Timer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Select } from "@material-ui/core";

const generateInitialSudoku = () => {
  var grid = Array(9)
    .fill()
    .map(() => Array(9).fill(0));
  grid = generateSudoku(grid, 46);
  return grid;
};

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

function SudokuGrid() {
  const [difficulty, setDifficulty] = useState("Difficulty");
  const [anchorEl, setAnchorEl] = useState(null);
  const [grid, setGrid] = useState(generateInitialSudoku());
  var arr = [0, 9, 18, 27, 36, 45, 54, 63, 72];
  var DifficultyArr = ["Easy", "Medium", "Hard"];

  const displayNumberIsZero = (grid, index) => {
    return grid[Math.floor(index / 9)][Math.floor(index % 9)] === 0;
  };

  const displayNumber = (grid, index) => {
    return grid[Math.floor(index / 9)][Math.floor(index % 9)];
  };

  const displayAnswer = (grid) => {
    let solution = [...grid];
    solveSudoku(solution);
    console.log(solution);
    setGrid(solution);
    setAnchorEl(null);
  };

  const changeDifficulty = (e) => {
    setDifficulty(e.target.value);
    makeNewGrid(e.target.value);
  };

  const makeNewGrid = (difficulty) => {
    console.log(difficulty);
    var newGrid = Array(9)
      .fill()
      .map(() => Array(9).fill(0));
    switch (difficulty) {
      case "Easy":
        newGrid = generateSudoku(newGrid, 31);
        setGrid(newGrid);
        setAnchorEl(null);
        break;
      case "Medium":
        newGrid = generateSudoku(newGrid, 45);
        setGrid(newGrid);
        setAnchorEl(null);
        break;
      case "Hard":
        newGrid = generateSudoku(newGrid, 55);
        setGrid(newGrid);
        setAnchorEl(null);
        break;

      default:
        break;
    }
  };
  const checkAnswer = (grid) => {
    for (let i = 0; i < 9; i) {
      for (let j = 0; j < 9; j++) {
        console.log(isValid(grid, i, j, grid[i][j]));
        console.log(i);
        console.log(j);
        console.log(grid[i][j]);
        console.log(grid);
        if (isValid(grid, i, j, grid[i][j]) === false) {
          alert("Looks like you messed up, please try again!");
          return;
        }
      }
    }
    alert("Well Done, looks like you solve it!");
    return;
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='Game'>
      <div className='SudokuGrid'>
        <div className='SudokuGrid__difficulty'>
          <FormControl>
            <Select
              onChange={changeDifficulty}
              variant='outlined'
              value={difficulty}>
              <MenuItem value={"Difficulty"}>Difficulty</MenuItem>
              {DifficultyArr.map((item, index) => (
                <MenuItem value={item} id={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <table id='grid' border='1'>
          {arr.map((item, index) => (
            <tr className='row' id={item}>
              <td class='cell'>
                <input
                  type='text'
                  maxlength='1'
                  placeholder={
                    displayNumberIsZero(grid, item)
                      ? ""
                      : displayNumber(grid, item)
                  }
                  id={index}
                  key={item}
                  disabled={!displayNumberIsZero(grid, item)}
                />
              </td>
              <td class='cell'>
                <input
                  type='text'
                  placeholder={
                    displayNumberIsZero(grid, item + 1)
                      ? ""
                      : displayNumber(grid, item + 1)
                  }
                  maxlength='1'
                  id={item + 1}
                  key={item + 1}
                  disabled={!displayNumberIsZero(grid, item + 1)}
                />
              </td>
              <td class='cell'>
                <input
                  placeholder={
                    displayNumberIsZero(grid, item + 2)
                      ? ""
                      : displayNumber(grid, item + 2)
                  }
                  type='text'
                  maxlength='1'
                  id={item + 2}
                  key={item + 2}
                  disabled={!displayNumberIsZero(grid, item + 2)}
                />
              </td>
              <td class='cell'>
                <input
                  type='text'
                  maxlength='1'
                  placeholder={
                    displayNumberIsZero(grid, item + 3)
                      ? ""
                      : displayNumber(grid, item + 3)
                  }
                  id={item + 3}
                  key={item + 3}
                  disabled={!displayNumberIsZero(grid, item + 3)}
                />
              </td>
              <td class='cell'>
                <input
                  type='text'
                  placeholder={
                    displayNumberIsZero(grid, item + 4)
                      ? ""
                      : displayNumber(grid, item + 4)
                  }
                  maxlength='1'
                  id={item + 4}
                  key={item + 4}
                  disabled={!displayNumberIsZero(grid, item + 4)}
                />
              </td>
              <td class='cell'>
                <input
                  type='text'
                  placeholder={
                    displayNumberIsZero(grid, item + 5)
                      ? ""
                      : displayNumber(grid, item + 5)
                  }
                  maxlength='1'
                  id={item + 5}
                  key={item + 5}
                  disabled={!displayNumberIsZero(grid, item + 5)}
                />
              </td>
              <td class='cell'>
                <input
                  type='text'
                  maxlength='1'
                  placeholder={
                    displayNumberIsZero(grid, item + 6)
                      ? ""
                      : displayNumber(grid, item + 6)
                  }
                  id={item + 6}
                  key={item + 6}
                  disabled={!displayNumberIsZero(grid, item + 6)}
                />
              </td>
              <td class='cell'>
                <input
                  type='text'
                  maxlength='1'
                  placeholder={
                    displayNumberIsZero(grid, item + 7)
                      ? ""
                      : displayNumber(grid, item + 7)
                  }
                  id={item + 7}
                  key={item + 7}
                  disabled={!displayNumberIsZero(grid, item + 7)}
                />
              </td>
              <td class='cell'>
                <input
                  type='text'
                  placeholder={
                    displayNumberIsZero(grid, item + 8)
                      ? ""
                      : displayNumber(grid, item + 8)
                  }
                  maxlength='1'
                  id={item + 8}
                  key={item + 8}
                  disabled={!displayNumberIsZero(grid, item + 8)}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className='SudokuSideItems'>
        <div className='optionMenu'>
          <Button
            style={{
              maxWidth: "280px",
              maxHeight: "70px",
              minWidth: "280px",
              minHeight: "70px",
              fontSize: "16px",
              borderRadius: "15px",
            }}
            aria-controls='customized-menu'
            aria-haspopup='true'
            variant='contained'
            color='primary'
            onClick={handleClick}>
            New Game
          </Button>
          <StyledMenu
            id='customized-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <StyledMenuItem
              style={{
                maxWidth: "280px",
                maxHeight: "50px",
                minWidth: "280px",
                minHeight: "50px",
                fontSize: "18px",
              }}
              onClick={() => displayAnswer(grid)}>
              <ListItemText primary='Solve' />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => makeNewGrid(difficulty)}>
              <ListItemText primary='New Grid' />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => checkAnswer(grid)}>
              <ListItemText primary='Check' />
            </StyledMenuItem>
          </StyledMenu>
        </div>
        <div className='Timer'>
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default SudokuGrid;
