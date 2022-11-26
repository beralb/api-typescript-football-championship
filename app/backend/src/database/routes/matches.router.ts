import { Router } from 'express';
import matchControllerGetAll from '../controller/matches.controller';

const router = Router();

router.get('/', matchControllerGetAll);

export default router;
