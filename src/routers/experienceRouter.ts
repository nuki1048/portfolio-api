import { Router } from 'express';
import {
  createNewExperience,
  deleteExperience,
  getAllExperience,
  updateExperience,
} from '../controllers/experienceController';
import { UserRoles, restrictTo } from '../controllers/authController';

const router = Router();

router.route('/').get(getAllExperience).post(createNewExperience);

router
  .route('/:id')
  .patch(restrictTo(UserRoles.Admin), updateExperience)
  .delete(restrictTo(UserRoles.Admin), deleteExperience);

export default router;
