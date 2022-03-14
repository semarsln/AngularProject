import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { CustomValidators } from "ng2-validation";

@Component({
  selector: 'app-addtests',
  templateUrl: './addtests.component.html',
  styleUrls: ['./addtests.component.scss']
})
export class AddtestsComponent implements OnInit {
  

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
   
  }
}
