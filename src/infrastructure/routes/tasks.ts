import { Router } from "express";
import { TaskController } from "../../application/controllers/tasksController";

const router = Router();

router.get("/tasks", TaskController.getAll);
router.post("/tasks", TaskController.create);
router.get("/tasks/:id", TaskController.getById);
router.put("/tasks/:id", TaskController.update);
router.delete("/tasks/:id", TaskController.delete);

export default router;
