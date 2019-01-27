import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Topic } from 'src/_model/topic';
import { TopicService } from 'src/_services/topic.service';
import { Readme } from 'src/_model/readme';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic;
  readmeContent = '';

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService
    ) { }

  ngOnInit() {
    const path = this.route.snapshot.paramMap.get('path');
    this.getTopic(path);

  }

  getTopic(path: string) {
    this.topicService.getTopic(path)
      .subscribe(
        (topic) => {
          this.topic = topic;
          this.onTopicRetrieved();
        },
        (error) => {
          console.error(`There was a problem retrieving the topic: ${error}`);
        }
      );
  }

  onTopicRetrieved() {
    this.getReadme();
  }

  getReadme() {
    this.topicService.getReadme(this.topic)
    .subscribe(
      (readme) => {
        this.readmeContent = readme.data;
      },
      (error) => {
        console.error(`There was a problem retrieving the readme: ${error}`);
      }
    );
  }
}
