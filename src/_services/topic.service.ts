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
        if (!this.topics) {
            return this.retrieveTopics();
        }
        return of(this.topics);
    }

    private retrieveTopics() {
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

    getTopic(path: string) {
        if (!this.topics) {
            return this.retrieveTopics().pipe(
                map(topics => this.searchTopicsByPath(path, topics)));
        }
        return of(this.searchTopicsByPath(path, this.topics));
    }

    private searchTopicsByPath(path: string, topics: Topic[]) {
        return topics.find(topic => topic.path === path);
    }
}