import express from 'express';
import type { Express } from 'express';
import morgan from 'morgan';

import repoRouter from './routers/repoRouter';
import blacklistRouter from './routers/blackListRouter';

const app: Express = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/repo', repoRouter);
app.use('/api/v1/blacklist', blacklistRouter);

export default app;
