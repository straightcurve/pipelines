import Task, { TaskLike } from "../task.js";
export declare class SkipAborted extends Task {
    task: TaskLike;
    constructor(task: TaskLike);
}
export default SkipAborted;
