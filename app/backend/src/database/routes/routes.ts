import { Router } from 'express';
import loginRouter from './login.router';
import teamsRouter from './teams.router';
import matchRouter from './matches.router';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/teams', teamsRouter);
routes.use('/matches', matchRouter);

export default routes;
