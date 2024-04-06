import { Router } from 'express';
import {
  createNewExperience,
  deleteExperience,
  getAllExperience,
  updateExperience,
} from '../controllers/experienceController';
import { UserRoles, protect, restrictTo } from '../controllers/authController';

const router = Router();

router.route('/').get(getAllExperience).post(createNewExperience);

router
  .route('/:id')
  .patch(protect, restrictTo(UserRoles.Admin), updateExperience)
  .delete(protect, restrictTo(UserRoles.Admin), deleteExperience);

export default router;
