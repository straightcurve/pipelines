import { TaskLike } from "./task";
import waitImmediate from "./wait";
import run from "./run";

export class Pipeline {
    constructor(public pipeline: TaskLike[] = []) {}

    public pipe(...tasks: TaskLike[]) {
        this.pipeline.push(...tasks);
    }

    public async exec(input: any) {
        for (const task of this.pipeline) {
            const [error] = await run(task, input);

            await waitImmediate();

            if (error) throw error;
        }

        return input;
    }
}

export default Pipeline;
