import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';
import { Topic } from 'src/_model/topic';

@Injectable()
export class ActionService {

    constructor(
        private http: HttpClient,
        private configService: ConfigService
    ) {
    }

    getAction(route: string, topic: Topic) {
        const url = `${topic.baseUrl}${topic.path}/actions/${route}`;
        // this.http.get(url);
    }
}