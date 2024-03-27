import { Router } from 'express';
import {
  createNewReview,
  getAllReviews,
  updateReview,
} from '../controllers/reviewController';

const router = Router();

router.route('/').get(getAllReviews).post(createNewReview);

router.route('/:id').patch(updateReview);

export default router;
