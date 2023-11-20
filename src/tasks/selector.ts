import Task, { TaskLike } from "../task";
import waitImmediate from "../wait";
import run from "../run";

/**
 * @description used for cancelling a task in a manner that works
 * with the {@link Selector}
 */
export class AbortTaskError extends Error {}

/**
 * @description Selectors execute their children in order.
 * They stop executing when one of their children succeeds.
 * If a Selector's child succeeds, the Selector succeeds.
 * If all the Selector's children fail, the Selector throws an AbortTask error.
 */
export class Selector extends Task {
    constructor(public tasks: TaskLike[]) {
        super(async (input) => {
            let allFailed = true;

            for (const task of tasks) {
                if (!allFailed) break;

                const [error] = await run(task, input);

                await waitImmediate();

                if (error) {
                    if (error instanceof AbortTaskError) continue;

                    throw error;
                }

                allFailed = false;
            }

            if (allFailed) throw new AbortTaskError("all tasks aborted");
        });
    }
}

export default Selector;
