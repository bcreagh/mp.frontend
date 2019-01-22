import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/_services/topic.service';
import { Topic } from 'src/_model/topic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics: Topic[] = [];
  selectedTopic: Topic;

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this.topicService.getTopics().subscribe(
      (topics) => {
        this.topics = topics;
        console.log(topics);
      },
      (error) => {
          console.error(`There was a problem loading the topics: ${error}`);
      }
    );
  }
}
