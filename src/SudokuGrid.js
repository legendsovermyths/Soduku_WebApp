// style={"border-collapse: collapse;"}
import React from "react";
import "./SudokuGrid.css";
var arr = [1, 10, 19, 28, 37, 46, 55, 64, 73];
function SudokuGrid() {
  return (
    <div class='SudokuGrid'>
      <table id='grid' border='1'>
        {arr.map((item, index) => (
          <tr class='row' id={item}>
            <td class='cell'>
              <input type='text' maxlength='1' id={item} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 1} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 2} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 3} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 4} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 5} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 6} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 7} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 8} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default SudokuGrid;
