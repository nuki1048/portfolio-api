import { NextFunction, Request, Response } from 'express';

interface RequestParams {
  slug?: string;
}

export const checkSlug = (
  req: Request<RequestParams>,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.slug || req.params.slug.length === 1) {
    return res.status(400).json({
      status: 'fail',
      message: 'The route requires a slug with more than one word.',
    });
  }

  next();
};
