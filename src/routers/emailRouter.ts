import { Router } from 'express';
import {
  getEmail,
  createEmail,
  getAllEmails,
  updateEmail,
  deleteEmail,
} from '../controllers/emailController';
import { checkBody } from '../utils/requestUtils';
import { checkAuth } from '../utils/authUitls';

const router = Router();

router.route('/').post(checkBody, createEmail).get(checkAuth, getAllEmails);
router
  .route('/:id')
  .get(checkAuth, getEmail)
  .patch(checkAuth, checkBody, updateEmail)
  .delete(checkAuth, deleteEmail);

export default router;
