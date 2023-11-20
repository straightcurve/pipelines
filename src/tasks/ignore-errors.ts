import Task, { TaskLike } from "../task";
import waitImmediate from "../wait";
import run from "../run";

export class IgnoreErrors extends Task {
    constructor(public tasks: TaskLike | TaskLike[]) {
        super(async (input) => {
            if (!Array.isArray(tasks)) {
                const [error] = await run(tasks, input);
                if (error) console.error(error);

                return;
            }

            for (const task of tasks) {
                const [error] = await run(task, input);
                if (error) console.error(error);

                await waitImmediate();
            }
        });
    }
}

export default IgnoreErrors;
