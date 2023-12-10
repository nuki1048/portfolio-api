import { Router } from 'express';
import {
  postItem,
  getBlackList,
  getSingleItem,
  updateItem,
} from '../controllers/blackListContoller';

const router = Router();

router.route('/').get(getBlackList).post(postItem);
router.route('/:slug').get(getSingleItem).patch(updateItem);

export default router;
