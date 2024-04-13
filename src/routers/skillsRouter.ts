import { Router } from 'express';
import {
  createNewSkill,
  deleteSkill,
  getAllSkills,
  updateSkill,
} from '../controllers/skillsController';
import { UserRoles, protect, restrictTo } from '../controllers/authController';

const router = Router();

router.route('/').get(getAllSkills).post(createNewSkill);

router
  .route('/:slug')
  .delete(protect, restrictTo(UserRoles.Admin), deleteSkill)
  .patch(protect, restrictTo(UserRoles.Admin), updateSkill);

export default router;
