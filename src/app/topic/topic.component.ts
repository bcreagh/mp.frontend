import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/_model/topic';
import { TopicService } from 'src/_services/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic;

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
        },
        (error) => {
          console.error(`There was a problem retrieving the topic: ${error}`);
        }
      );
  }
}
