export type Fn = (input: any) => void | Promise<void>;
export type TaskLike = Task | Fn;

export class Task {
    constructor(public fn: Fn) {}
}

export default Task;
