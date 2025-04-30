import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/TaskServices";

export const DeleteTaskUseCase={
  deleteTask: (req: Request, res: Response, next: NextFunction): void => {
      try {
        const success = TaskService.delete(Number(req.params.id));
        if (!success) {
          res.status(404).send("Task not found");
          return;
        }
        res.sendStatus(200);
      } catch (error) {
        next(error);
      }
  }
}  