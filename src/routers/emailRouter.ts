import { Router } from 'express';
import {
  getEmail,
  createEmail,
  getAllEmails,
  updateEmail,
  deleteEmail,
} from '../controllers/emailController';
import { checkBody } from '../utils/requestUtils';
import { UserRoles, protect, restrictTo } from '../controllers/authController';

const router = Router();

router
  .route('/')
  .post(checkBody, createEmail)
  .get(protect, restrictTo(UserRoles.Admin), getAllEmails);
router
  .route('/:id')
  .get(protect, restrictTo(UserRoles.Admin), getEmail)
  .patch(protect, restrictTo(UserRoles.Admin), checkBody, updateEmail)
  .delete(protect, restrictTo(UserRoles.Admin), deleteEmail);

export default router;
