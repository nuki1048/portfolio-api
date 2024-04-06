import { IUser } from '../../src/models/userModel';

declare namespace Express {
  export interface Request {
    user: IUser;
  }
}
