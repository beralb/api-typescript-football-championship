import { Router } from 'express';
import homeTeamController from '../controller/leaderboard.controller';

const router = Router();

router.get('/home', homeTeamController);

export default router;
