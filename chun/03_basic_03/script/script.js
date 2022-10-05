"use strict";
const tableEl = document.getElementById("string-table");
tableEl.innerHTML = '';
let strArr = ["String 1", "String 2", "String 3", "String 4", "String 5"];
strArr.forEach((el, index) => {
    tableEl.innerHTML += `
      <tr>
        <td>${index}</td>
        <td>${el}</td>
        <td>${index}:${el}</td>
    </tr>
    `;
});