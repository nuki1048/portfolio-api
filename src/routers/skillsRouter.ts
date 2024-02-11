import { Router } from 'express';
import { createNewSkill, getAllSkills } from '../controllers/skillsController';

const router = Router();

router.route('/').get(getAllSkills).post(createNewSkill);

export default router;
