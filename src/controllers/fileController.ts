import { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { storage } from '../storage/storage';
import { catchAsync } from '../utils/catchAsync';

const TEN_MB = 10000000;

const parser = multer({ storage: storage, limits: { fileSize: TEN_MB } });

export const prepareUpload = (name: string = 'image') => parser.single(name);

// eslint-disable-next-line import/prefer-default-export
export const uploadPhoto = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: {
      file: req.file,
    },
  });
};

export const deletePhoto = catchAsync(
  async (req: Request<{ fileId: string }>, res: Response) => {
    const deletedPhoto = await cloudinary.uploader.destroy(
      `portfolio_api/${req.params.fileId}`,
      {
        resource_type: 'image',
      },
    );

    if (deletedPhoto.result !== 'ok') {
      return res.status(404).json({
        status: 'fail',
        message: `Image with id ${req.params.fileId} not found.`,
      });
    }

    res.status(204).json({});
  },
);
