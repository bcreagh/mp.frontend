import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-result',
  templateUrl: './action-result.component.html',
  styleUrls: ['./action-result.component.css']
})
export class ActionResultComponent implements OnInit {

  @Input() result: string;

  constructor() { }

  ngOnInit() {
  }

}
