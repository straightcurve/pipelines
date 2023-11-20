import Task, { TaskLike } from "../task";
import waitImmediate from "../wait";
import run from "../run";

export class Sequence extends Task {
    constructor(public tasks: TaskLike[]) {
        super(async (input) => {
            for (const task of tasks) {
                const [error] = await run(task, input);

                await waitImmediate();

                if (error) throw error;
            }
        });
    }
}

export default Sequence;
