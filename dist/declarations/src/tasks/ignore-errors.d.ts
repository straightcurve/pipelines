import Task, { TaskLike } from "../task.js";
declare class IgnoreErrors extends Task {
    tasks: TaskLike | TaskLike[];
    constructor(tasks: TaskLike | TaskLike[]);
}
export default IgnoreErrors;
