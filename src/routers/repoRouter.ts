import { Router } from 'express';
import {
  getAllRepos,
  getRepoFile,
  getSingleRepo,
} from '../controllers/repoController';

import { checkSlug } from '../utils/requestUtils';

const router = Router();

router.route('/').get(getAllRepos);
router.route('/:slug').get(checkSlug, getSingleRepo);

router.route('/:slug/:fileName').get(getRepoFile);

export default router;
