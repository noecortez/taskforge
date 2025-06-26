import { mockTask } from "../models/task.model";
import { Task } from "../types/task";

export class TaskService {
    getAll(): Task[] {
        return mockTask;
    }
}
