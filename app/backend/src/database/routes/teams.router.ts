import { Router } from 'express';
import controllerGetAll from '../controller/teams.controller';

const router = Router();

router.get('/', controllerGetAll);

export default router;
