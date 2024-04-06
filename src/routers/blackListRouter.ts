import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  postItem,
  getBlackList,
  getSingleItem,
  updateItem,
} from '../controllers/blackListController';
import { checkBody } from '../utils/requestUtils';
import { checkAuth } from '../utils/authUitls';
import { UserRoles, protect, restrictTo } from '../controllers/authController';

const router = Router();

router
  .route('/')
  .get(getBlackList)
  .post(protect, restrictTo(UserRoles.Admin), checkBody, postItem);
router
  .route('/:slug')
  .get(checkAuth, getSingleItem)
  .patch(protect, restrictTo(UserRoles.Admin), checkBody, updateItem);

export default router;
