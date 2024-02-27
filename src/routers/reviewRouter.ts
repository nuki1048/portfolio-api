import { Router } from 'express';
import { getAllReviews } from '../controllers/reviewController';

const router = Router();

router.route('/').get(getAllReviews);

export default router;
