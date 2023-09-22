import Task, { TaskLike } from "../task.js";
declare class SkipAborted extends Task {
    task: TaskLike;
    constructor(task: TaskLike);
}
export default SkipAborted;
