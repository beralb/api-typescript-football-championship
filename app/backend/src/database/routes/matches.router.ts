import { Router } from 'express';
import matchControllerGet, {
  matchControllerPatchMatch, matchControllerSaveMatch,
} from '../controller/matches.controller';
import validateNewMatchBody, { validateExistingTeams } from '../middlewares/match.validations';
import tokenCheck from '../middlewares/token.check';

const router = Router();

router.get('/', matchControllerGet);
router.post('/', tokenCheck, validateNewMatchBody, validateExistingTeams, matchControllerSaveMatch);
router.patch('/:id/finish', matchControllerPatchMatch);

export default router;
