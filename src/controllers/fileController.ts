import { Request, Response } from 'express';

// eslint-disable-next-line import/prefer-default-export
export const uploadPhoto = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: {
      file: req.file,
    },
  });
};
