import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopicService } from 'src/_services/topic.service';
import { Topic } from 'src/_model/topic';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  actionRoute = '';
  readmeContent = '';

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.actionRoute = this.route.snapshot.paramMap.get('action-route');
  }

}
