// style={"border-collapse: collapse;"}
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./SudokuGrid.css";
import { generateSudoku, solveSudoku } from "./AlgorithmsUtil";
function generateInitialSudoku() {
  var grid = Array(9)
    .fill()
    .map(() => Array(9).fill(0));
  grid = generateSudoku(grid, 46);
  return grid;
}
function SudokuGrid() {
  const [grid, setGrid] = useState(generateInitialSudoku());
  var arr = [0, 9, 18, 27, 36, 45, 54, 63, 72];

  function displayNumberIsZero(grid, index) {
    return grid[Math.floor(index / 9)][Math.floor(index % 9)] === 0;
  }

  function displayNumber(grid, index) {
    return grid[Math.floor(index / 9)][Math.floor(index % 9)];
  }

  function displayAnswer(grid) {
    let solution = [...grid];
    solveSudoku(solution);
    console.log(solution);
    setGrid(solution);
  }
  function makeNewGrid() {
    var newGrid = Array(9)
      .fill()
      .map(() => Array(9).fill(0));
    newGrid = generateSudoku(newGrid, 51);
    setGrid(newGrid);
  }
  return (
    <div className='Game'>
      <div className='SudokuGrid'>
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
      <div className='buttonContainer'>
        <div>
          <Button
            className='button'
            onClick={() => displayAnswer(grid)}
            variant='contained'
            color='primary'
            disableElevation>
            SOLVE
          </Button>
        </div>
        <div>
          <Button
            className='button'
            onClick={makeNewGrid}
            variant='contained'
            color='primary'
            disableElevation>
            NEW GRID
          </Button>
        </div>
        <div>
          <Button
            className='button'
            variant='contained'
            color='primary'
            disableElevation>
            CHECK
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SudokuGrid;
