import { Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as jwt from 'jsonwebtoken';

// eslint-disable-next-line import/prefer-default-export
export const getLogin = (req: Request, res: Response) => {
  try {
    const token = jwt.sign('payload', process.env.JWT_SECRET);
    res.status(200).json({ status: 'suceess', data: { token } });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};
