import mongoose from 'mongoose';
import { Octokit } from 'octokit';
import dotenv from 'dotenv';
import { Repository } from '../models/repositoryModel';

dotenv.config({ path: './config.env' });

let url = process.env.DATABASE_URL;

url = url
  .replace('USERNAME', process.env.DATABASE_USERNAME)
  .replace('PASSWORD', process.env.DATABASE_PASSWORD);

const octokit = new Octokit({});

mongoose.connect(`${url}/repositories`);

const getData = async () => {
  const repos = await octokit.request('GET /users/{username}/repos', {
    username: process.env.GITHUB_USER_NAME,
  });

  return repos.data;
};

const getRepositoriesList = async () => {
  const data = await getData();
  return data.map((item) => ({
    name: item.name,
  }));
};

const importListInDatabase = async () => {
  const data = await getRepositoriesList();

  data.forEach(async (value) => {
    const repo = new Repository(value);
    await repo.save();
  });
};

// eslint-disable-next-line no-console
importListInDatabase().then(() => console.log('Data imported in database✅'));
