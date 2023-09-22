import Task, { TaskLike } from "./task.js";
/**
 * @description execute a task with a modified input
 */
declare const delegate: <TI, TO>(task: TaskLike, transformationFn: (input: TI) => TO, postFn?: ((input: TI, transformedInput: TO) => Promise<void> | void) | undefined) => Task;
export default delegate;
