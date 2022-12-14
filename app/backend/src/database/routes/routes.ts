import { Router } from 'express';
import loginRouter from './login.router';
import teamsRouter from './teams.router';
import matchRouter from './matches.router';
import leaderboardRouter from './leaderboard.router';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/teams', teamsRouter);
routes.use('/matches', matchRouter);
routes.use('/leaderboard', leaderboardRouter);

export default routes;
