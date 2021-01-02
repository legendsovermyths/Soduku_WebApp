// style={"border-collapse: collapse;"}
import React, { useState } from "react";
import { fillDiagonal, sodokoSolver, removeKdigits } from "./AlgorithmsUtil";
import "./SudokuGrid.css";

function SudokuGrid() {
  var arr = [0, 9, 18, 27, 36, 45, 54, 63, 72];
  var grid2 = Array(9)
    .fill()
    .map(() => Array(9).fill(0));
  grid2 = fillDiagonal(grid2);
  sodokoSolver(grid2);
  removeKdigits(9, grid2);
  console.log(grid2);
  const [grid, setGrid] = useState(grid2);
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
                  grid[Math.floor(item / 9)][Math.floor(item % 9)] !== 0
                    ? grid[Math.floor(item / 9)][Math.floor(item % 9)]
                    : ""
                }
                id={index}
                key={item}
                disabled={
                  grid[Math.floor(item / 9)][Math.floor(item % 9)] !== 0
                    ? true
                    : false
                }
              />
            </td>
            <td class='cell'>
              <input
                type='text'
                placeholder={
                  grid[Math.floor((item + 1) / 9)][
                    Math.floor((item + 1) % 9)
                  ] !== 0
                    ? grid[Math.floor((item + 1) / 9)][
                        Math.floor((item + 1) % 9)
                      ]
                    : ""
                }
                maxlength='1'
                id={item + 1}
                key={item + 1}
                disabled={
                  grid[Math.floor((item + 1) / 9)][
                    Math.floor((item + 1) % 9)
                  ] !== 0
                    ? true
                    : false
                }
              />
            </td>
            <td class='cell'>
              <input
                placeholder={
                  grid[Math.floor((item + 2) / 9)][
                    Math.floor((item + 2) % 9)
                  ] !== 0
                    ? grid[Math.floor((item + 2) / 9)][
                        Math.floor((item + 2) % 9)
                      ]
                    : ""
                }
                type='text'
                maxlength='1'
                id={item + 2}
                key={item + 2}
                disabled={
                  grid[Math.floor((item + 2) / 9)][
                    Math.floor((item + 2) % 9)
                  ] !== 0
                    ? true
                    : false
                }
              />
            </td>
            <td class='cell'>
              <input
                type='text'
                maxlength='1'
                placeholder={
                  grid[Math.floor((item + 3) / 9)][
                    Math.floor((item + 3) % 9)
                  ] !== 0
                    ? grid[Math.floor((item + 3) / 9)][
                        Math.floor((item + 3) % 9)
                      ]
                    : ""
                }
                id={item + 3}
                key={item + 3}
                disabled={
                  grid[Math.floor((item + 3) / 9)][
                    Math.floor((item + 3) % 9)
                  ] !== 0
                    ? true
                    : false
                }
              />
            </td>
            <td class='cell'>
              <input
                type='text'
                placeholder={
                  grid[Math.floor((item + 4) / 9)][
                    Math.floor((item + 4) % 9)
                  ] !== 0
                    ? grid[Math.floor((item + 4) / 9)][
                        Math.floor((item + 4) % 9)
                      ]
                    : ""
                }
                maxlength='1'
                id={item + 4}
                key={item + 4}
                disabled={
                  grid[Math.floor((item + 4) / 9)][
                    Math.floor((item + 4) % 9)
                  ] !== 0
                    ? true
                    : false
                }
              />
            </td>
            <td class='cell'>
              <input
                type='text'
                placeholder={
                  grid[Math.floor((item + 5) / 9)][
                    Math.floor((item + 5) % 9)
                  ] !== 0
                    ? grid[Math.floor((item + 5) / 9)][
                        Math.floor((item + 5) % 9)
                      ]
                    : ""
                }
                maxlength='1'
                id={item + 5}
                key={item + 5}
                disabled={
                  grid[Math.floor((item + 5) / 9)][
                    Math.floor((item + 5) % 9)
                  ] !== 0
                    ? true
                    : false
                }
              />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 6} key={item + 6} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 7} key={item + 7} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 8} key={item + 8} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default SudokuGrid;
