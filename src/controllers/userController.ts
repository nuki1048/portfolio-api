/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../utils/catchAsync';
import { IUser, User } from '../models/userModel';
import { AppError } from '../utils/appError';
import * as factory from './handlerFactory';

const filterObj = (object: object, ...allowedFields: string[]) =>
  Object.fromEntries(
    Object.entries(object).filter(([key]) => allowedFields.includes(key)),
  );

export const updateMe = catchAsync(
  async (
    req: Request<
      object,
      object,
      Partial<Pick<IUser, 'password' | 'passwordConfirm' | 'email' | 'name'>>
    >,
    res: Response,
    next: NextFunction,
  ) => {
    const { password, passwordConfirm } = req.body;
    if (password || passwordConfirm) {
      next(
        new AppError(
          'This route is not for password updates. Please user /updatePassword',
          403,
        ),
      );
    }

    const filteredBody = filterObj(req.body, 'name', 'email');
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      filteredBody,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  },
);

export const deleteMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });

    res.status(204).json({
      status: 'success',
      data: null,
    });
  },
);

export const getMe = (req: Request, res: Response, next: NextFunction) => {
  req.params.id = req.user.id;
  next();
};

// Do NOT update passwords with this
export const updateUser = factory.updateOneDocument(User);
export const deleteUser = factory.deleteOneDocument(User);
export const getAllUsers = factory.getAllDocuments(User);
export const getUser = factory.getOneDocument(User);
export const createUser = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead',
  });
};
