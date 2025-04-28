import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/TaskServices";

export const TaskController = {
  getAll: (req: Request, res: Response, next: NextFunction): void => {
    try {
      const tasks = TaskService.getAll();
      res.json(tasks);
    } catch (error) {
      next(error);
    }
  },

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
  },

  create: (req: Request, res: Response, next: NextFunction): void => {
    try {
      const task = TaskService.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  },

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
  },

  delete: (req: Request, res: Response, next: NextFunction): void => {
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
  },
};
