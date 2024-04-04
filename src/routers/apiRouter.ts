import { Router } from 'express';
import repoRouter from './repoRouter';
import blacklistRouter from './blackListRouter';
import emailRouter from './emailRouter';
import infoRouter from './infoRouter';
import experienceRouter from './experienceRouter';
import skillsRouter from './skillsRouter';
import reviewRouter from './reviewRouter';
import fileRouter from './fileRouter';

const router = Router();

router.use('/repo', repoRouter);
router.use('/blacklist', blacklistRouter);
router.use('/email', emailRouter);
router.use('/info', infoRouter);
router.use('/experience', experienceRouter);
router.use('/skills', skillsRouter);
router.use('/reviews', reviewRouter);
router.use('/file', fileRouter);

export default router;
