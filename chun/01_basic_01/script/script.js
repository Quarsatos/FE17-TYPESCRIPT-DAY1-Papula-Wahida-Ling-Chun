"use strict";
const multiTableEl = document.getElementById("multi-table");
for (let i = 1; i < 11; i++) {
    createTr(`Multiply by ${i}`, 'table-light');
    for (let j = 1; j < 11; j++) {
        const str = `${i} x ${j} = ${i * j}`;
        createTr(str);
    }
}
function createTr(multi, tableClass) {
    let tableRow = document.createElement("tr");
    let tableData = document.createElement("td");
    tableData.innerHTML = multi;
    if (tableClass) {
        tableData.classList.add(tableClass);
    }
    tableRow.appendChild(tableData);
    multiTableEl.appendChild(tableRow);
}
