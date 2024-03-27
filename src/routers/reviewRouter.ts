import { Router } from 'express';
import {
  createNewReview,
  deleteReview,
  getAllReviews,
  updateReview,
} from '../controllers/reviewController';

const router = Router();

router.route('/').get(getAllReviews).post(createNewReview);

router.route('/:id').patch(updateReview).delete(deleteReview);

export default router;
