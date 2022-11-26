import { Router } from 'express';
import controllerGetAll, { controllerGetById } from '../controller/teams.controller';

const router = Router();

router.get('/', controllerGetAll);
router.get('/:id', controllerGetById);

export default router;
