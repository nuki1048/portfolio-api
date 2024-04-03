import { Router } from 'express';
import {
  createNewSection,
  getAllSections,
  getSingleSection,
} from '../controllers/infoController';
import { UserRoles, restrictTo } from '../controllers/authController';

const router = Router();

router
  .route('/')
  .post(restrictTo(UserRoles.Admin), createNewSection)
  .get(getAllSections);
router.route('/:slug').get(getSingleSection);

export default router;
