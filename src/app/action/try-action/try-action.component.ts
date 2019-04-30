import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Topic } from 'src/_model/topic';
import { Action } from 'src/_model/action';
import { TopicService } from 'src/_services/topic.service';
import { ActionService } from 'src/_services/action.service';
import { ActionResult } from 'src/_model/action-result';
import { ActionInputComponent } from './action-input/action-input.component';
import { ActionResultComponent } from './action-result/action-result.component';
import { Example } from 'src/_model/example';

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
  showResult = false;
  selectedExample: Example;
  displayExamples = false;


  @ViewChild(ActionInputComponent) inputComponent: ActionInputComponent;
  @ViewChild(ActionResultComponent) resultComponent: ActionResultComponent;

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
    if (this.action.examples.length > 0) {
      this.displayExamples = true;
    }
  }

  submitAction() {
    const input = this.inputComponent.getInput();
    this.actionService.submitAction(input, this.topic, this.action).subscribe(
      (actionResult) => {
        this.result = actionResult;
        this.displayResult(this.result.output);
        this.showResult = true;
      }
    );
  }

  displayResult(result) {
    this.resultComponent.setResult(result);
  }

  showTemplate() {
    this.inputComponent.setInput(this.action.requestDetails.inputTemplate);
  }

  doparse() {
    const res = this.inputComponent.getInput();
    console.log(res);
  }

  onInputError(error: string) {
    this.inputError = error;
  }

  submitExample() {
    if (this.selectedExample.input) {
      this.inputComponent.setInput(this.selectedExample.input);
    }
    this.actionService.submitExample(this.selectedExample, this.topic, this.action).subscribe(
      (actionResult) => {
        this.result = actionResult;
        this.displayResult(this.result.output);
        this.showResult = true;
      }
    );
  }
}
