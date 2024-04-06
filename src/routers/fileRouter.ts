/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';
import multer from 'multer';

import { storage } from '../storage/storage';
import { deletePhoto, uploadPhoto } from '../controllers/fileController';
import { UserRoles, protect, restrictTo } from '../controllers/authController';

const router = Router();

const TEN_MB = 10000000;

const parser = multer({ storage: storage, limits: { fileSize: TEN_MB } });

router
  .route('/upload')
  .post(
    protect,
    restrictTo(UserRoles.Admin),
    parser.single('image'),
    uploadPhoto,
  );
router
  .route('/delete/:fileId')
  .delete(protect, restrictTo(UserRoles.Admin), deletePhoto);

export default router;
