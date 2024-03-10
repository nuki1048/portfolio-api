import { Router } from 'express';
import {
  createNewReview,
  getAllReviews,
} from '../controllers/reviewController';

const router = Router();

router.route('/').get(getAllReviews).post(createNewReview);

export default router;
