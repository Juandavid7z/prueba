import { Task } from "../models/tasks";

let tasks: Task[] = [];

export const TaskRepository = {
  findAll: (): Task[] => tasks,

  findById: (id: number): Task | [] => {
     const task = tasks.filter((task) => task.id === id);
      return task !== undefined ? task[0] : []
  },

  create: (task: Task): Task => {
    tasks.push(task);
    return task;
  },

  update: (id: number, updated: Partial<Task>): Task | null => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return null;
    Object.assign(task, updated);
    return task;
  },

  delete: (id: number): boolean => {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  },
};
