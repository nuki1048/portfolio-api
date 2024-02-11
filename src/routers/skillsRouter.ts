import { Router } from 'express';
import {
  createNewSkill,
  deleteSkill,
  getAllSkills,
} from '../controllers/skillsController';

const router = Router();

router.route('/').get(getAllSkills).post(createNewSkill);

router.route('/:slug').delete(deleteSkill);

export default router;
