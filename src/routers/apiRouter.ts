import { Router } from 'express';
import repoRouter from './repoRouter';
import blacklistRouter from './blackListRouter';
import emailRouter from './emailRouter';
import infoRouter from './infoRouter';

const router = Router();

router.use('/repo', repoRouter);
router.use('/blacklist', blacklistRouter);
router.use('/email', emailRouter);
router.use('/info', infoRouter);

export default router;
