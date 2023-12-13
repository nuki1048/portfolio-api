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

const router = Router();

router.route('/').get(getBlackList).post(checkAuth, checkBody, postItem);
router
  .route('/:slug')
  .get(checkAuth, getSingleItem)
  .patch(checkAuth, checkBody, updateItem);

export default router;
