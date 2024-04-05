/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';
import multer from 'multer';

import { storage } from '../storage/storage';
import { deletePhoto, uploadPhoto } from '../controllers/fileController';

const router = Router();

const TEN_MB = 10000000;

const parser = multer({ storage: storage, limits: { fileSize: TEN_MB } });

router.route('/upload').post(parser.single('image'), uploadPhoto);
router.route('/delete/:fileId').delete(deletePhoto);

export default router;
