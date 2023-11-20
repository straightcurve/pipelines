import saw from "@sweetacid/saw";
import Pipeline from "./pipeline";
import Task, { TaskLike } from "./task";

export const run = async (task: TaskLike, input: any) => {
    return saw(async () => {
        if (task instanceof Pipeline) {
            await task.exec(input);
        } else if (task instanceof Task) {
            const [error] = await saw(() => task.fn(input));
            if (error) throw error;
        } else if (typeof task === "function") {
            const [error] = await saw(() => task(input));
            if (error) throw error;
        }
    });
};

export default run;
