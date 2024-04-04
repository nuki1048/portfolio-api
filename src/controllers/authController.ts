/* eslint-disable @typescript-eslint/indent */
import { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as jwt from 'jsonwebtoken';
import { AppError } from '../utils/appError';

export enum UserRoles {
  User = 'user',
  Admin = 'admin',
}

// eslint-disable-next-line import/prefer-default-export
export const getLogin = (req: Request, res: Response) => {
  try {
    const token = jwt.sign('payload', process.env.JWT_SECRET);
    res.status(200).json({ status: 'suceess', data: { token } });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};

export const restrictTo =
  (...roles: UserRoles[]) =>
  (req: Request, res: Response, next: NextFunction) =>
    // const isUserHavePermission = roles.includes([]);
    // if (!isUserHavePermission) {
    //   return next(
    //     new AppError('You do not have permission to perform this action', 403),
    //   );
    // }
    // TODO: MAKE IT WORK AFTER AUTH
    next();
