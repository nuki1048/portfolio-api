import { NextFunction, Request, Response } from 'express';
import { Repository } from '../models/repositoryModel';

interface RequestParams {
  slug?: string;
}

// eslint-disable-next-line import/prefer-default-export
export const checkSlug = async (
  req: Request<RequestParams>,
  res: Response,
  next: NextFunction,
) => {
  const { slug } = req.params;
  const data = await Repository.find({ name: slug });
  if (data.length === 0) {
    next();
  } else {
    return res.status(404).json({
      status: 'fail',
      message: 'Repository must not be on blacklist.',
    });
  }
};
