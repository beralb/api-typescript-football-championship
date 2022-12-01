import { Router } from 'express';
import { homeTeamController, awayTeamController } from '../controller/leaderboard.controller';

const router = Router();

router.get('/home', homeTeamController);
router.get('/away', awayTeamController);

export default router;
