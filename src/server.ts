/* eslint-disable no-console */
import dotenv from 'dotenv';

// eslint-disable-next-line import/first
import mongoose from 'mongoose';
import app from './app';

import { getUrl } from './utils/stringUtils';

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 8000;

const url = getUrl();

mongoose
  .connect(`${url}/${process.env.NODE_ENV}`)
  .then(() => console.log('Connection to database active✅'))
  .catch(() => console.log('Connection to database failed❌'));

app.listen(PORT, () => {
  console.log('App listen on port 8000👻. http://localhost:8000');
});
