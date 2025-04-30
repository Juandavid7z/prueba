import { Router } from "express";
import {CreateTaskUseCase} from "../../../application/useCases/CreateTaskUseCase";
import {DeleteTaskUseCase} from "../../../application/useCases/DeleteTaskUseCase";
import {FindAllTasksUseCase} from "../../../application/useCases/FindAllTasksUseCase";
import {FinByIdTasksUseCase} from "../../../application/useCases/FindByIdTasksUseCase";
import {UpdateTaskUseCase} from "../../../application/useCases/UpdateTaskUseCase";
const router = Router();

router.get("/tasks", FindAllTasksUseCase.getAll);
router.post("/tasks", CreateTaskUseCase.create);
router.get("/tasks/:id", FinByIdTasksUseCase.getById);
router.put("/tasks/:id", UpdateTaskUseCase.update);
router.delete("/tasks/:id", DeleteTaskUseCase.deleteTask);

export default router;
