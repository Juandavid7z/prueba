import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/TaskServices";

export const FinByIdTasksUseCase={
  getById: (req: Request, res: Response, next: NextFunction): void => {
      try {
        const task = TaskService.getById(Number(req.params.id));
        if (!task) {
          res.status(404).send("Task not found");
          return;
        }
        res.json(task);
      } catch (error) {
        next(error);
      }
  }
}