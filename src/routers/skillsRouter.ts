import { Router } from 'express';
import { getAllSkills } from '../controllers/skillController';

const router = Router();

router.route('/').get(getAllSkills);

export default router;
