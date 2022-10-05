"use strict";
const personTableEl = document.getElementById("person-table");
personTableEl.innerHTML = '';
class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    getFName() {
        return this.fName;
    }
    getLName() {
        return this.lName;
    }
}
const personArr = [];
for (let i = 0; i < 10; i++) {
    personArr.push(new Person("John", "Doe"));
}
personArr.forEach(person => {
    personTableEl.innerHTML += `
     <tr>
        <td>${person.getFName()}</td>
        <td>${person.getLName()}</td>
    </tr>
    `;
});
