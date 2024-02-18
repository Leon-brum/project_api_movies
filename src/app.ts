import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: err.message })
  next()
})

export default app;