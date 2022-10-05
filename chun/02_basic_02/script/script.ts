const personTableEl : any = document.getElementById("person-table");
personTableEl.innerHTML = '';


class Person {
  private fName: string;
  private lName: string;

  public constructor(fName: string, lName: string) {
    this.fName = fName;
    this.lName = lName;
  }

  public getFName(): string {
    return this.fName;
  }

  public getLName(): string {
    return this.lName;
  }
}

const personArr : Person[] = [];

for(let i = 0; i < 10; i++) {
    personArr.push(new Person("John", "Doe"));
}

personArr.forEach(person => {
    personTableEl.innerHTML += `
     <tr>
        <td>${person.getFName()}</td>
        <td>${person.getLName()}</td>
    </tr>
    ` 
})