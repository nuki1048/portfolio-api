import { Router } from 'express';
import {
  getEmail,
  createEmail,
  getAllEmails,
  updateEmail,
  deleteEmail,
} from '../controllers/emailController';
import { checkBody } from '../utils/requestUtils';

const router = Router();

router.route('/').post(checkBody, createEmail).get(getAllEmails);
router
  .route('/:id')
  .get(getEmail)
  .patch(checkBody, updateEmail)
  .delete(deleteEmail);

export default router;
