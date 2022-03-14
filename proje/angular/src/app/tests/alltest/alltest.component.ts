import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alltest',
  templateUrl: './alltest.component.html',
  styleUrls: ['./alltest.component.scss']
})
export class AlltestComponent{
  users = [
    { no: '1', category: 'frank.murphy@test.com', question: 'User' },
    { no: '2', category: 'vic.reynolds@test.com', question: 'Admin' },
    { no: '3',  category: 'gina.jabowski@test.com', question: 'Admin' },
    { no: '4', category: 'jessi.glaser@test.com', question: 'User' },
    { no: '5',  category: 'jay.bilzerian@test.com', question: 'User' }
];
}