import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/TaskServices";

export const FindAllTasksUseCase={
  getAll: (req: Request, res: Response, next: NextFunction): void => {
      try {
        const tasks = TaskService.getAll();
        res.json(tasks);
      } catch (error) {
        next(error);
      }
  }
}