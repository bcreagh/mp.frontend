import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';
import { Topic } from 'src/_model/topic';
import { Action } from 'src/_model/action';
import { TopicService } from './topic.service';

@Injectable()
export class ActionService {

    constructor(
        private http: HttpClient,
        private topicService: TopicService,
        private configService: ConfigService
    ) {
    }

    getAction(route: string, topic: Topic) {
        const url = `${topic.baseUrl}${topic.path}/${route}`;
        return this.http.get<Action>(url);
    }
}