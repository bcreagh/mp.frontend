import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TopicService } from 'src/_services/topic.service';
import { Topic } from 'src/_model/topic';
import { ActionService } from 'src/_services/action.service';
import { Action } from 'src/_model/action';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  actionRoute = '';
  readmeContent = '';
  topic: Topic;
  action: Action;

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private actionService: ActionService
    ) { }

  ngOnInit() {
    const topicPath = this.route.snapshot.paramMap.get('topic');
    this.actionRoute = this.route.snapshot.paramMap.get('action-route');
    this.getTopic(topicPath);
  }

  getTopic(topicPath: string) {
    this.topicService.getTopic(topicPath).subscribe(
      (topic) => {
        this.topic = topic;
        this.getAction(topic);
      },
      (error) => {
        console.error(`There was a problem retrieving the topic: ${error}`);
      }
    );
  }

  getAction(topic: Topic) {
    this.actionService.getAction(this.actionRoute, topic).subscribe(
      (action) => {
        this.action = action;
        this.onActionRetrieved();
      },
      (error) => {
        console.error(`There was a problem retrieving the action: ${error}`);
      }
    );
  }

  onActionRetrieved() {

  }

}
