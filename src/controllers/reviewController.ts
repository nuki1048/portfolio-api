/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import Review from '../models/reviewModel';

export const getAllReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    length: reviews.length,
    data: {
      reviews,
    },
  });
};
