import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  postItem,
  getBlackList,
  getSingleItem,
  updateItem,
} from '../controllers/blackListContoller';
import { checkBody } from '../utils/requestUtils';
import { checkAuth } from '../utils/authUitls';
import { UserRoles, restrictTo } from '../controllers/authController';

const router = Router();

router
  .route('/')
  .get(getBlackList)
  .post(restrictTo(UserRoles.Admin), checkBody, postItem);
router
  .route('/:slug')
  .get(checkAuth, getSingleItem)
  .patch(restrictTo(UserRoles.Admin), checkBody, updateItem);

export default router;
