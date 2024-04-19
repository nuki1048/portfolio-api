/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';

import {
  deletePhoto,
  prepareUpload,
  uploadPhoto,
} from '../controllers/fileController';
import { UserRoles, protect, restrictTo } from '../controllers/authController';

const router = Router();

router.route('/upload').post(prepareUpload('image'), uploadPhoto);
router
  .route('/delete/:fileId')
  .delete(protect, restrictTo(UserRoles.Admin), deletePhoto);

export default router;
