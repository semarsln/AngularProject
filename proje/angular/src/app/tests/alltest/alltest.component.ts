import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alltest',
  templateUrl: './alltest.component.html',
  styleUrls: ['./alltest.component.scss']
})


export class AlltestComponent{
  editField: string;
 

  personList: Array<any> = [
    { id: 1, category: 'c', question: "Specify different types of decision control statements?", },
    { id: 2, category: 'python', question: "What is a dynamically typed language?", },
    { id: 3, category: 'php', question: "What is the difference between static and dynamic websites?", },
    { id: 4, category: 'java', question: "What do you understand by an instance variable and a local variable?",  },
    { id: 5, category: 'Angular', question: "Why were client-side frameworks like Angular introduced?",  },
  ];

  awaitingPersonList: Array<any> = [
    { id: 6, category: 'George Vega', question: 28 },
    { id: 7, category: 'Mike Low', question: 22 },
    { id: 8, category: 'John Derp', question: 36 },
    { id: 9, category: 'Anastasia John', question: 21 },
    { id: 10, category: 'John Maklowicz', question: 36},
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }



  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}