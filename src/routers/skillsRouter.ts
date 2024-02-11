import { Router } from 'express';
import {
  createNewSkill,
  deleteSkill,
  getAllSkills,
  updateSkill,
} from '../controllers/skillsController';

const router = Router();

router.route('/').get(getAllSkills).post(createNewSkill);

router.route('/:slug').delete(deleteSkill).patch(updateSkill);

export default router;
