import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  actionRoute = '';
  
  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.actionRoute = this.route.snapshot.paramMap.get('action-route');
  }

}
