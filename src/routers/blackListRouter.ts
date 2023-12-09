import { Router } from 'express';
import {
  postItem,
  getBlackList,
  getSingleItem,
  deleteItem,
} from '../controllers/blackListContoller';

const router = Router();

router.route('/').get(getBlackList).post(postItem);
router.route('/:slug').get(getSingleItem).delete(deleteItem);

export default router;
