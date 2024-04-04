/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';
import multer from 'multer';

import { storage } from '../storage/storage';
import { uploadPhoto } from '../controllers/fileController';

const router = Router();

const TEN_MB = 10000000;

const parser = multer({ storage: storage, limits: { fileSize: TEN_MB } });

router.post('/upload', parser.single('image'), uploadPhoto);

export default router;
