import { Router } from 'express';
import {
  homeTeamController,
  awayTeamController,
  leaderboardController,
} from '../controller/leaderboard.controller';

const router = Router();

router.get('/home', homeTeamController);
router.get('/away', awayTeamController);
router.get('/', leaderboardController);

export default router;
