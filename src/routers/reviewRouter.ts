import { Router } from 'express';
import {
  createNewReview,
  deleteReview,
  getAllReviews,
  updateReview,
} from '../controllers/reviewController';
import { UserRoles, restrictTo } from '../controllers/authController';

const router = Router();

router.route('/').get(getAllReviews).post(createNewReview);

router
  .route('/:id')
  .patch(restrictTo(UserRoles.Admin), updateReview)
  .delete(restrictTo(UserRoles.Admin), deleteReview);

export default router;
