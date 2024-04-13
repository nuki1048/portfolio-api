/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import type { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import authRouter from './routers/authRouter';
import apiRouter from './routers/apiRouter';
// import { auth, checkAuth } from './utils/authUitls';
import { AppError } from './utils/appError';
import { errorHandler } from './controllers/errorHandler';
import { getUrl } from './utils/stringUtils';

dotenv.config({ path: './.env' });

const app: Express = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const url = getUrl();

mongoose
  .connect(`${url}/${process.env.NODE_ENV}`)
  .then(() => console.log('Connection to database active✅'))
  .catch(() => console.log('Connection to database failed❌'));

app.use(helmet());

app.use(express.json());

app.use('/api/v1', apiRouter);

app.use('/auth', authRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

export default app;
