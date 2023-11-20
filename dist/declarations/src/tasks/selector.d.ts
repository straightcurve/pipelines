import Task, { TaskLike } from "../task.js";
/**
 * @description used for cancelling a task in a manner that works
 * with the {@link Selector}
 */
export declare class AbortTaskError extends Error {
}
/**
 * @description Selectors execute their children in order.
 * They stop executing when one of their children succeeds.
 * If a Selector's child succeeds, the Selector succeeds.
 * If all the Selector's children fail, the Selector throws an AbortTask error.
 */
export declare class Selector extends Task {
    tasks: TaskLike[];
    constructor(tasks: TaskLike[]);
}
export default Selector;
