export type Fn = (input: any) => void | Promise<void>;
export type TaskLike = Task | Fn;
export declare class Task {
    fn: Fn;
    constructor(fn: Fn);
}
export default Task;
