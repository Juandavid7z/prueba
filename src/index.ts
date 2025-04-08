import express, { Request, Response } from 'express';
import taskRoutes from './routes/tasks';
import cors from  'cors';

const app = express();
const port = process.env.PORT || 3001;
app.use(cors())

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use('/api', taskRoutes); // Add this line to mount the Task API routes

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express1');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});