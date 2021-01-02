// style={"border-collapse: collapse;"}
import React, { useState } from "react";
import { fillDiagonal, sodokoSolver, removeKdigits } from "./AlgorithmsUtil";
import "./SudokuGrid.css";

function SudokuGrid() {
  function displayNumberIsZero(grid, index) {
    return grid[Math.floor(index / 9)][Math.floor(index % 9)] === 0;
  }
  function displayNumber(grid, index) {
    return grid[Math.floor(index / 9)][Math.floor(index % 9)];
  }
  var arr = [0, 9, 18, 27, 36, 45, 54, 63, 72];
  var grid2 = Array(9)
    .fill()
    .map(() => Array(9).fill(0));
  grid2 = fillDiagonal(grid2);
  sodokoSolver(grid2);
  removeKdigits(51, grid2);
  console.log(grid2);

  const [grid, setGrid] = useState(grid2);
  console.log(displayNumber(grid, 0));
  return (
    <div class='SudokuGrid'>
      <table id='grid' border='1'>
        {arr.map((item, index) => (
          <tr class='row' id={item}>
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
  );
}

export default SudokuGrid;
