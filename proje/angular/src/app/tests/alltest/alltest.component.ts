import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alltest',
  templateUrl: './alltest.component.html',
  styleUrls: ['./alltest.component.scss']
})


export class AlltestComponent{
  rows = [];
  editing = {};
  temp = [];
  columns = [];
 

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
    req.open("GET", `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(d => {
      return d.email.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }
}