import { Router } from 'express';
import { getLogin } from '../controllers/authController';

const router = Router();

router.route('/login').get(getLogin);

export default router;
