import express from 'express';
import type { Express } from 'express';
import morgan from 'morgan';

import authRouter from './routers/authRouter';
import apiRouter from './routers/apiRouter';
import { auth, checkAuth } from './utils/authUitls';

const app: Express = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1', auth, checkAuth, apiRouter);

app.use('/auth', authRouter);

export default app;
