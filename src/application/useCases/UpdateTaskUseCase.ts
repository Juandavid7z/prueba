import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/TaskServices";

export const UpdateTaskUseCase={
  update: (req: Request, res: Response, next: NextFunction): void => {
      try {
        const task = TaskService.update(Number(req.params.id), req.body);
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