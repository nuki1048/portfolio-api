import { Request, Response } from 'express';
import { Octokit } from 'octokit';
import { Repository } from '../models/repositoryModel';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});
export const getAllRepos = async (req: Request, res: Response) => {
  try {
    const repos = await octokit.request('GET /users/{username}/repos', {
      username: process.env.GITHUB_USER_NAME,
    });

    const blacklist = await Repository.find({});
    // TODO: Transform this logic in REPO model
    const filteredRepos = repos.data.filter((repo) =>
      blacklist.some((black) => black.name === repo.name && black.show),
    );

    res.status(200).json({
      status: 'success',
      data: {
        repos: filteredRepos,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      data: {
        error,
      },
    });
  }
};

export const getSingleRepo = async (
  req: Request<{ slug: string }>,
  res: Response,
) => {
  const { slug } = req.params;
  try {
    const repos = await octokit.request('GET /repos/{owner}/{repo}', {
      owner: process.env.GITHUB_USER_NAME,
      repo: slug,
    });

    res.status(200).json({
      status: 'success',
      data: {
        repos: repos.data,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      data: {
        error,
      },
    });
  }
};

export const getRepoFile = async (
  req: Request<{ slug: string; fileName: string }>,
  res: Response,
) => {
  const { fileName, slug } = req.params;

  try {
    const repos = await octokit.request(
      'GET /repos/{owner}/{repo}/contents/{path}',
      {
        owner: 'nuki1048',
        repo: slug,
        path: fileName,
      },
    );

    res.status(200).json({
      status: 'success',
      data: {
        repos: repos.data,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      data: {
        error,
      },
    });
  }
};
