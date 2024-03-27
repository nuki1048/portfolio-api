/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import Review, { IReview } from '../models/reviewModel';

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

export const createNewReview = async (
  req: Request<object, object, Partial<IReview>>,
  res: Response,
  next: NextFunction,
) => {
  const newReview = await Review.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
};

export const updateReview = async (
  req: Request<{ id: string }, object, Partial<IReview>>,
  res: Response,
) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    returnOriginal: false,
  });

  res.status(200).json({ status: 'success', data: { review } });
};

export const deleteReview = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  await Review.findByIdAndDelete(req.params.id);

  res.status(204).json({ status: 'success', data: null });
};
