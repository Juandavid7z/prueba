import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/TaskServices";

export const CreateTaskUseCase={
  create: (req: Request, res: Response, next: NextFunction): void => {
    try {
      const task = TaskService.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }
}
