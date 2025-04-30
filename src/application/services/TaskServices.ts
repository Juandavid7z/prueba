import { Task } from "../../domain/models/tasks";
import { TaskRepository } from "../../infrastructure/repositories/TaskRepository";

export const TaskService = {
  getAll: () => TaskRepository.findAll(),

  getById: (id: number) => TaskRepository.findById(id),

  create: (data: Omit<Task, "id">): Task => {
    const task: Task = {
      id: Date.now(), // Id simulado
      ...data,
    };
    return TaskRepository.create(task);
  },

  update: (id: number, data: Partial<Task>) =>
    TaskRepository.update(id, data),

  delete: (id: number) => TaskRepository.delete(id),
};
