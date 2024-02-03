import { Router } from 'express';
import {
  createNewSection,
  getSingleSection,
} from '../controllers/infoController';

const router = Router();

router.route('/').post(createNewSection);
router.route('/:slug').get(getSingleSection);

export default router;
