import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Topic } from 'src/_model/topic';
import { ConfigService } from './config.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TopicService {
    topics: Topic[];

    constructor(
        private http: HttpClient,
        private configService: ConfigService
    ) {
    }

    getTopics() {
        if (this.topics) {
            return of(this.topics);
        }
        const filename = this.getTopicsFilename();
        return this.http.get<Topic[]>(`/assets/config/topics/${filename}`).pipe(
            map(data => {
                this.topics = data;
                return data;
            }));
    }

    private getTopicsFilename() {
        const envName = this.configService.getEnvironmentName();
        return `topics.${envName}.json`;
    }
}