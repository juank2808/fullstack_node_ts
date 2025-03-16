import express, { Request, Response } from 'express';
import router from './router';
import { connectDB } from './config/db';
const app = express();
//read data
connectDB()
app.use(express.json());
app.use('/', router);

export default app;