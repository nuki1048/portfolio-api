import { Router } from 'express';
import {
  createNewExperience,
  deleteExperience,
  getAllExperience,
  updateExperience,
} from '../controllers/experienceController';

const router = Router();

router.route('/').get(getAllExperience).post(createNewExperience);

router.route('/:id').patch(updateExperience).delete(deleteExperience);

export default router;
