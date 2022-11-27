import { Router } from 'express';
import matchControllerGetAll, {
  matchControllerPatchMatch, matchControllerSaveMatch,
} from '../controller/matches.controller';
import validateNewMatchBody from '../middlewares/match.validations';

const router = Router();

router.get('/', matchControllerGetAll);
router.post('/', validateNewMatchBody, matchControllerSaveMatch);
router.patch('/:id/finish', matchControllerPatchMatch);

export default router;
