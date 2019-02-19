import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Topic } from 'src/_model/topic';
import { Action } from 'src/_model/action';
import { TopicService } from 'src/_services/topic.service';
import { ActionService } from 'src/_services/action.service';
import { ActionResult } from 'src/_model/action-result';
import { ActionInputComponent } from './action-input/action-input.component';
import { ActionResultComponent } from './action-result/action-result.component';

@Component({
  selector: 'app-try-action',
  templateUrl: './try-action.component.html',
  styleUrls: ['./try-action.component.css']
})
export class TryActionComponent implements OnInit {

  topicPath = '';
  actionRoute = '';
  readmeContent = '';
  topic: Topic;
  action: Action;
  input: string = '';
  result: ActionResult;
  inputError = '';


  @ViewChild(ActionInputComponent) inputComponent: ActionInputComponent;

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService,
    private actionService: ActionService
    ) { }

  ngOnInit() {
    this.topicPath = this.route.snapshot.paramMap.get('topic');
    this.actionRoute = this.route.snapshot.paramMap.get('action-route');
    this.getTopic();
  }

  getTopic() {
    this.topicService.getTopic(this.topicPath).subscribe(
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

  submitAction() {
    const input = this.inputComponent.input;
    this.actionService.submitAction(input, this.topic, this.action).subscribe(
      (actionResult) => {
        this.result = actionResult;
      }
    );
  }

  showTemplate() {
    this.inputComponent.input = this.action.requestDetails.inputTemplate;
  }

  doparse() {
    this.inputComponent.mode = "JSON";
    const res = this.inputComponent.getInput();
    console.log(res);
  }

  onInputError(error: string) {
    this.inputError = error;
  }
}
