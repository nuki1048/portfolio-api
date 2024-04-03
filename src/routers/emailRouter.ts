import { Router } from 'express';
import {
  getEmail,
  createEmail,
  getAllEmails,
  updateEmail,
  deleteEmail,
} from '../controllers/emailController';
import { checkBody } from '../utils/requestUtils';
import { UserRoles, restrictTo } from '../controllers/authController';

const router = Router();

router
  .route('/')
  .post(checkBody, createEmail)
  .get(restrictTo(UserRoles.Admin), getAllEmails);
router
  .route('/:id')
  .get(restrictTo(UserRoles.Admin), getEmail)
  .patch(restrictTo(UserRoles.Admin), checkBody, updateEmail)
  .delete(restrictTo(UserRoles.Admin), deleteEmail);

export default router;
