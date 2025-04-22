import { Router, Request, Response } from 'express';
import { Task } from '../models/tasks';

const router = Router();
let tasks: Task[] = [];

/*** 
*  @swagger
* components:
*   schemas:
*     tasks:
*       type: object
*       required:
*         - tittle
*         - description        
*         - completed       
*
*       properties:
*         id:
*           type: number
*           description: The auto-generated id of the Task
*         title:
*           type: string
*           description: The name of the tasks
*         description:
*           type: string
*           description: The description of the task
*         completed:
*           type: boolean
*           description: The state of the task
*       example:
*         id: 1
*         tittle: Imprimir la tarea
*         description: Se necesita sacar la impresion de las tareas 
*         completed: false
*/

/**
* @swagger
* tags:
*   name: Tasks
*   description: The Task Management API
*/

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new Task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tasks'
 *     responses:
 *       201:
 *         description: The Task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tasks'
 *       500:
 *         description: Some server error
 */

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

/**
* @swagger
* /api/tasks:
*   get:
*     summary: Returns the list of all the Tasks
*     tags: [Tasks]
*     responses:
*       200:
*         description: The list of the Tasks
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/tasks'
*/

router.get('/tasks/', (req: Request, res: Response) => {
    res.json(tasks);
});

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a Tasks by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Tasks id
 *     responses:
 *       200:
 *         description: The Tasks description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tasks'
 *       404:
 *         description: The Tasks was not found
 */

router.get('/tasks/:id', (req: Request, res: Response) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
  
    if (!task) {
      res.status(404).send('Task not found');
    } else {
      res.json(task);
    }
});

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a Tasks by the id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Task id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/tasks'
 *     responses:
 *       200:
 *         description: The Tasks was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tasks'
 *       404:
 *         description: The Tasks was not found
 *       500:
 *         description: Some error happened
 */

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

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Remove the Tasks by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Tasks id
 *     responses:
 *       200:
 *         description: The Tasks was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/tasks'
 *       404:
 *         description: The Tasks was not found
 */

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

