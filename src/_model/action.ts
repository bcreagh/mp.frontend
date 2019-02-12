import { Readme } from './readme';
import { Example } from './example';
import { RequestDetails } from './request-details/request-details';

export class Action {
    readme: Readme;
    examples: Example[];
    requestDetails: RequestDetails;
}