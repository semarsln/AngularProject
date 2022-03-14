import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcandidates',
  templateUrl: './allcandidates.component.html',
  styleUrls: ['./allcandidates.component.scss']
})
export class AllcandidatesComponent  {
  rows = [];

  temp = [];

  columns = [{ prop: "name" }, { name: "Company" }, { name: "Gender" }];

  constructor() {
    this.fetch(data => {
      // cache our list
      this.temp = [...data];
      // push our inital complete list
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open("GET", `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(d => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }
}
