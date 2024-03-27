/* eslint-disable @typescript-eslint/indent */
import { Model } from 'mongoose';
import Experience from '../models/experienceModel';
import * as handlerFactory from './handlerFactory';

export const getAllExperience = handlerFactory.getAllDocuments(
  Experience as unknown as Model<unknown>,
);

export const createNewExperience = handlerFactory.createOne(
  Experience as unknown as Model<unknown>,
);

export const updateExperience = handlerFactory.updateOneDocument(
  Experience as unknown as Model<unknown>,
);

export const deleteExperience = handlerFactory.deleteOneDocument(
  Experience as unknown as Model<unknown>,
);
