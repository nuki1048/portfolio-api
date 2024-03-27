/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Model } from 'mongoose';
import Review from '../models/reviewModel';
import * as handlerFactory from './handlerFactory';

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
