export type Fn = (input: any) => void | Promise<void>;
export type TaskLike = Task | Fn;

class Task {
    constructor(public fn: Fn) {}
}

export default Task;
