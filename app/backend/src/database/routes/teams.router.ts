import { Router } from 'express';
import controllerGetAll, { controllerTeamGetById } from '../controller/teams.controller';

const router = Router();

router.get('/', controllerGetAll);
router.get('/:id', controllerTeamGetById);

export default router;
