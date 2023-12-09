import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Repository } from '../models/repositoryModel';

dotenv.config({ path: './config.env' });

let url = process.env.DATABASE_URL;

url = url
  .replace('USERNAME', process.env.DATABASE_USERNAME)
  .replace('PASSWORD', process.env.DATABASE_PASSWORD);

mongoose.connect(`${url}/repositories`);

const dropCollection = async () => {
  await Repository.collection.drop();
};

// eslint-disable-next-line no-console
dropCollection().then(() => console.log('Collection successfully dropped✅'));
