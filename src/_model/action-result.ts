import { Log } from './log';

export class ActionResult {
    input: string;
    output: string;
    logs: Log[];
    performance: number;
}