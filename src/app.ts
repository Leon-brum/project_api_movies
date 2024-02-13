import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/vivo', (_req, res) => res.status(200).send('oi'));

export default app;