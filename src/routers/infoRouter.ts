import { Router } from 'express';
import {
  createNewSection,
  getSingleSection,
} from '../controllers/infoController';
import { UserRoles, restrictTo } from '../controllers/authController';

const router = Router();

router.route('/').post(restrictTo(UserRoles.Admin), createNewSection);
router.route('/:slug').get(getSingleSection);

export default router;
