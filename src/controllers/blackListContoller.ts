import { Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Model } from 'mongoose';
import { Repository } from '../models/repositoryModel';
import * as handlerFactory from './handlerFactory';

interface SingleItemParams {
  slug: string;
}

export const getBlackList = handlerFactory.getAllDocuments(
  Repository as unknown as Model<unknown>,
);

export const getSingleItem = async (
  req: Request<SingleItemParams>,
  res: Response,
) => {
  const { slug } = req.params;
  try {
    const repositories = await Repository.find({ name: slug });

    res.status(200).json({
      status: 'success',
      data: {
        repositories,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: {
        error,
      },
    });
  }
};

export const updateItem = handlerFactory.updateOneDocument(
  Repository as unknown as Model<unknown>,
);

export const postItem = handlerFactory.createOne(
  Repository as unknown as Model<unknown>,
);
