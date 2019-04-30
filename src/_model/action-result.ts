import { Log } from './log';

export class ActionResult {
    input: string;
    output: any;
    logs: Log[];
    performance: number;
}