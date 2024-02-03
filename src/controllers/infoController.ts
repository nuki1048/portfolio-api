import { Request, Response } from 'express';
import Info, { IInfo } from '../models/infoModel';

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

export const createNewSection = async (
  req: Request<object, object, IInfo>,
  res: Response,
) => {
  try {
    const section = await Info.create(req.body);

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
