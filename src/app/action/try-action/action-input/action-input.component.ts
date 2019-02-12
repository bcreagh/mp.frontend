import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-input',
  templateUrl: './action-input.component.html',
  styleUrls: ['./action-input.component.css']
})
export class ActionInputComponent implements OnInit {

  input: string;

  constructor() { }

  ngOnInit() {
  }

  getInput() {
    return this.input;
  }

}
