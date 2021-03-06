import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Topic } from 'src/_model/topic';
import { Action } from 'src/_model/action';
import { ActionResult } from 'src/_model/action-result';
import { MpInput } from 'src/_model/mpInput';
import { RequestDetails } from 'src/_model/request-details/request-details';
import { inputTypes } from 'src/_model/request-details/input-types';
import { httpMethods } from 'src/_model/request-details/http-methods';
import { Example } from 'src/_model/example';

@Injectable()
export class ActionService {

    constructor(
        private http: HttpClient
    ) {
    }

    getAction(route: string, topic: Topic) {
        const url = `${topic.baseUrl}${topic.path}/${route}`;
        return this.http.get<Action>(url);
    }

    submitExample(example: Example, topic: Topic, action: Action) {
        if (!example.hasOwnRoute) {
            return this.submitAction(example.input, topic, action);
        }
        // example has its own route
        return this.submitAction(example.input, topic, action, example.route);
    }

    submitAction(input: any, topic: Topic, action: Action, exampleRoute='') {
        switch (action.requestDetails.httpMethod) {
            case httpMethods.POST:
                return this.submitActionPost(input, topic, action, exampleRoute);
            default:
                throw new Error(`The http method ${action.requestDetails.httpMethod} is not supported`);
        }
    }

    private submitActionPost(input: any, topic: Topic, action: Action, exampleRoute='') {
        let url = '';
        if (exampleRoute) {
            url = `${topic.baseUrl}${topic.path}/${action.route}/${exampleRoute}`;
        } else {
            url = `${topic.baseUrl}${topic.path}/${action.route}`;
        }
        const body = this.getRequestBody(input, action.requestDetails);
        return this.http.post<ActionResult>(url, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    private getRequestBody(input: any, requestDetails: RequestDetails) {
        switch (String(requestDetails.inputType)) {
            case inputTypes.NONE:
                return new MpInput('');
            case inputTypes.JSON:
                return input;
            case inputTypes.TEXT:
                return new MpInput(input);
            default:
                throw new Error(`The input type ${requestDetails.inputType} is not recognised`);
        }
    }
}