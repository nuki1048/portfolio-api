import { Router } from 'express';
import {
  postItem,
  getBlackList,
  getSingleItem,
  updateItem,
} from '../controllers/blackListContoller';
import { checkBody } from '../utils/requestUtils';

const router = Router();

router.route('/').get(getBlackList).post(checkBody, postItem);
router.route('/:slug').get(getSingleItem).patch(checkBody, updateItem);

export default router;
