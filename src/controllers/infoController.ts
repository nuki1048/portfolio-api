import { Request, Response } from 'express';
import { Model } from 'mongoose';
import Info from '../models/infoModel';
import * as handlerFactory from './handlerFactory';

interface SingleSectionParams {
  slug: string;
}

// eslint-disable-next-line import/prefer-default-export

export const getSingleSection = async (
  req: Request<SingleSectionParams>,
  res: Response,
) => {
  try {
    const section = await Info.findOne({ slug: req.params.slug });

    res.status(200).json({
      status: 'success',
      data: {
        section,
      },
    });
  } catch (error) {
    res.status(404).json({ status: 'fail', message: error });
  }
};

export const getAllSections = handlerFactory.getAllDocuments(
  Info as unknown as Model<unknown>,
);

export const createNewSection = handlerFactory.createOne(
  Info as unknown as Model<unknown>,
);
