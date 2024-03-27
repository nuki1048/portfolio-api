/* eslint-disable @typescript-eslint/indent */
/* eslint-disable import/prefer-default-export */
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { catchAsync } from '../utils/catchAsync';

export const createOne = (Model: mongoose.Model<unknown>) =>
  catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response, next: NextFunction) => {
      const newDoc = await Model.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          data: newDoc,
        },
      });
    },
  );

export const getAllDocuments =
  (model: mongoose.Model<unknown>) => async (req: Request, res: Response) => {
    const doc = await model.find();

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  };

export const getOneDocument =
  (model: mongoose.Model<unknown>) =>
  async (req: Request<{ id: string }>, res: Response) => {
    const doc = await model.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  };

export const updateOneDocument =
  (model: mongoose.Model<unknown>) =>
  async (req: Request<{ id: string }>, res: Response) => {
    const doc = await model.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      returnOriginal: false,
    });

    res.status(200).json({ status: 'success', data: { data: doc } });
  };

export const deleteOneDocument =
  (model: mongoose.Model<unknown>) =>
  async (req: Request<{ id: string }>, res: Response) => {
    await model.findByIdAndDelete(req.params.id);

    res.status(204).json({ status: 'success', data: null });
  };
