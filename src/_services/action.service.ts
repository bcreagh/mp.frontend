import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';
import { Topic } from 'src/_model/topic';
import { Action } from 'src/_model/action';
import { TopicService } from './topic.service';
import { ActionResult } from 'src/_model/action-result';
import { MpInput } from 'src/_model/mpInput';

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

    submitAction(input: any, topic: Topic, action: Action) {

        
        const url = `${topic.baseUrl}${topic.path}/${action.route}`;
        const mpInput = new MpInput(input);
        return this.http.post<ActionResult>(url, mpInput, {
            headers: {
                'Content-Type':  'application/json'
            }
        });
    }
}