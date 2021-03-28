import React from "react";

function SodukoSolve() {
  const arr = [0, 9, 18, 27, 36, 45, 54, 63, 72];
  return (
    <div>
      <table id='grid' border='1'>
        {arr.map((item, index) => (
          <tr className='row' id={item}>
            <td class='cell'>
              <input type='text' maxlength='1' id={index} key={item} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 1} key={item + 1} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 2} key={item + 2} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 3} key={item + 3} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 4} key={item + 4} />
            </td>
            <td class='cell'>
              <input type='text' maxlength='1' id={item + 5} key={item + 5} />
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

export default SodukoSolve;
