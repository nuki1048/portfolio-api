import { Router } from 'express';
import {
  createNewSkill,
  deleteSkill,
  getAllSkills,
  updateSkill,
} from '../controllers/skillsController';
import { UserRoles, restrictTo } from '../controllers/authController';

const router = Router();

router
  .route('/')
  .get(getAllSkills)
  .post(restrictTo(UserRoles.Admin), createNewSkill);

router
  .route('/:slug')
  .delete(restrictTo(UserRoles.Admin), deleteSkill)
  .patch(updateSkill);

export default router;
