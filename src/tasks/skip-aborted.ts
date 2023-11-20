import { AbortTaskError } from "./selector";
import Task, { TaskLike } from "../task";
import waitImmediate from "../wait";
import run from "../run";

export class SkipAborted extends Task {
    constructor(public task: TaskLike) {
        super(async (input) => {
            const [error] = await run(task, input);

            await waitImmediate();

            if (error === null || error instanceof AbortTaskError) {
                return;
            }

            throw error;
        });
    }
}

export default SkipAborted;
