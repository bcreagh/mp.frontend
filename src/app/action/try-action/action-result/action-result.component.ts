import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-result',
  templateUrl: './action-result.component.html',
  styleUrls: ['./action-result.component.css']
})
export class ActionResultComponent implements OnInit {

  result: string;

  constructor() { }

  ngOnInit() {
  }

  setResult(result) {
    let resultText;
    if (typeof(result) === "string") {
      console.log("It is a string");
      resultText = result;
    } else {
      resultText = JSON.stringify(result, null, 4);
      console.log("It is a string");
    }
    this.result = resultText;
  }

}
