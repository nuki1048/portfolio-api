import { Request, Response } from 'express';
import { IRepository, Repository } from '../models/repositoryModel';

interface SingleItemParams {
  slug: string;
}

export const getBlackList = async (req: Request, res: Response) => {
  try {
    const repositories = await Repository.find();

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

export const deleteItem = async (
  req: Request<SingleItemParams>,
  res: Response,
) => {
  const { slug } = req.params;
  try {
    await Repository.findOneAndDelete({ name: slug });

    res.status(204).json({
      status: 'success',
      data: {},
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

export const postItem = async (
  req: Request<object, object, IRepository>,
  res: Response,
) => {
  try {
    const repository = await Repository.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        repository,
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
