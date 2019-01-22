import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Topic } from 'src/_model/topic';
import { ConfigService } from './config.service';

@Injectable()
export class TopicService {
    constructor(
        private http: HttpClient,
        private configService: ConfigService
    ) {
    }

    getTopics() {
        const filename = this.getTopicsFilename();
        return this.http.get<Topic[]>(`/assets/config/topics/${filename}`);
    }

    private getTopicsFilename() {
        const envName = this.configService.getEnvironmentName();
        return `topics.${envName}.json`;
    }
}