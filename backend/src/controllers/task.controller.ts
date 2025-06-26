import { Request, Response } from "express";
import { TaskService } from "../services/task.service";

const taskService = new TaskService();

export const getTasks = (_req: Request, res: Response) => {
    const tasks = taskService.getAll();
    res.status(200).json(tasks);
}
