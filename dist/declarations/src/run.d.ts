import { TaskLike } from "./task.js";
export declare const run: (task: TaskLike, input: any) => Promise<[unknown, null] | [null, void]>;
export default run;
