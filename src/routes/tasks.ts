import { Router, Request, Response } from 'express';
import { Task } from '../models/tasks';

const router = Router();
let tasks: Task[] = [];

router.post('/tasks', (req: Request, res: Response) => {
    const task: Task = {
      id: tasks.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
    };
  
    tasks.push(task);
    res.status(201).json(task);
});

router.get('/tasks/', (req: Request, res: Response) => {
    res.json(tasks);
});

router.get('/tasks/:id', (req: Request, res: Response) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
  
    if (!task) {
      res.status(404).send('Task not found');
    } else {
      res.json(task);
    }
});

router.put('/tasks/:id', (req: Request, res: Response) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
  
    if (!task) {
      res.status(404).send('Task not found');
    } else {
      task.title = req.body.title || task.title;
      task.description = req.body.description || task.description;
      task.completed = req.body.completed || task.completed;
  
      res.json(task);
    }
});

router.delete('/tasks/:id', (req: Request, res: Response) => {
    const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  
    if (index === -1) {
      res.status(404).send('Task not found');
    } else {
      tasks.splice(index, 1);
      res.status(200).send();
    }
});

export default router;

