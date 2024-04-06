/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Model } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import Review, { StatusReview } from '../models/reviewModel';
import * as handlerFactory from './handlerFactory';

export const checkStatus = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.body.status === StatusReview.Accepted && !req.user) {
    req.body = { ...req.body, status: StatusReview.InProgress };
  }
};

export const getAllReviews = handlerFactory.getAllDocuments(
  Review as unknown as Model<unknown>,
);

export const createNewReview = handlerFactory.createOne(
  Review as unknown as Model<unknown>,
);

export const updateReview = handlerFactory.updateOneDocument(
  Review as unknown as Model<unknown>,
);

export const deleteReview = handlerFactory.deleteOneDocument(
  Review as unknown as Model<unknown>,
);
