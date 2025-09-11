import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/userRouter.js';
import { authRouter } from './routes/authRouter.js';
import { profileRouter } from './routes/profileRouter.js';
import { dbInit } from './utils/dbInit.js';
import cookieParser from 'cookie-parser';

export function createServer() {
  const server = express();

  server.use(express.json());
  server.use(cookieParser());
  server.use(cors());

  server.get('/', (req, res) => {
    res.status(200).send('Server is running');
  });

  server.use('/users', userRouter);
  server.use('/auth', authRouter);
  server.use('/profile', profileRouter);

  return server;
}

