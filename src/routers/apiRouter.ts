import { Router } from 'express';
import repoRouter from './repoRouter';
import blacklistRouter from './blackListRouter';
import emailRouter from './emailRouter';

const router = Router();

router.use('/repo', repoRouter);
router.use('/blacklist', blacklistRouter);
router.use('/email', emailRouter);

export default router;
