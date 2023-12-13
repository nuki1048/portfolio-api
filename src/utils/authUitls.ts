// eslint-disable-next-line import/no-extraneous-dependencies
import { expressjwt, Request, type Params } from 'express-jwt';
import dotenv from 'dotenv';
import { NextFunction, Response } from 'express';

dotenv.config({ path: './.env' });

// eslint-disable-next-line import/prefer-default-export
export const AUTH_CONFIG: Params = {
  algorithms: ['HS256'],
  secret: process.env.JWT_SECRET,
};

export const auth = expressjwt({ ...AUTH_CONFIG }).unless({
  path: ['/auth/*'],
});

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.auth) {
    return res.status(401).json({ status: 'fail', message: 'Unauthorized' });
  }

  next();
};
