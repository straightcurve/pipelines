import Task, { TaskLike } from "../task.js";
declare class Sequence extends Task {
    tasks: TaskLike[];
    constructor(tasks: TaskLike[]);
}
export default Sequence;
