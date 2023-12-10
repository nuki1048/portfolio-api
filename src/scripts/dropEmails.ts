import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Email from '../models/emailModel';

dotenv.config({ path: './config.env' });

let url = process.env.DATABASE_URL;

url = url
  .replace('USERNAME', process.env.DATABASE_USERNAME)
  .replace('PASSWORD', process.env.DATABASE_PASSWORD);

mongoose.connect(`${url}/${process.env.NODE_ENV}`);

const dropCollection = async () => {
  try {
    await Email.collection.drop();

    // eslint-disable-next-line no-console
    console.log('Blacklist collection successfully dropped✅');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Something went wrong❌');
  }

  process.exit();
};

dropCollection();
