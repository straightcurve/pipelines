import saw from "@sweetacid/saw";
import Task, { TaskLike } from "./task";
import run from "./run";

/**
 * @description execute a task with a modified input
 */
export const delegate = <TI, TO>(
    task: TaskLike,
    transformationFn: (input: TI) => TO,
    postFn?: (input: TI, transformedInput: TO) => Promise<void> | void
) => {
    return new Task(async (input) => {
        const transformed = transformationFn(input);

        const [taskError] = await run(task, transformed);
        if (taskError) throw taskError;

        if (!postFn) return;

        const [error] = await saw(() => postFn(input, transformed));
        if (error) throw error;
    });
};

export default delegate;
