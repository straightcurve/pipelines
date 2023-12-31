import { TaskLike } from "./task.js";
export declare class Pipeline {
    pipeline: TaskLike[];
    constructor(pipeline?: TaskLike[]);
    pipe(...tasks: TaskLike[]): void;
    exec(input: any): Promise<any>;
}
export default Pipeline;
