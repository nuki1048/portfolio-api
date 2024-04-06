import { Router } from 'express';
import {
  checkStatus,
  createNewReview,
  deleteReview,
  getAllReviews,
  updateReview,
} from '../controllers/reviewController';
import { UserRoles, protect, restrictTo } from '../controllers/authController';

const router = Router();

router.route('/').get(getAllReviews).post(checkStatus, createNewReview);

router
  .route('/:id')
  .patch(protect, restrictTo(UserRoles.Admin), updateReview)
  .delete(protect, restrictTo(UserRoles.Admin), deleteReview);

export default router;
