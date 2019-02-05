import { Component, OnInit } from '@angular/core';

import { TopicService } from 'src/_services/topic.service';
import { Topic } from 'src/_model/topic';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  topics: Topic[];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
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
