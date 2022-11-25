import { Router } from 'express';
import loginController from '../controller/login.controller';
import tokenCheck from '../middlewares/token.check';
import validation from '../middlewares/validations';

const router = Router();

router.post('/', loginController);

router.get('/validate', tokenCheck, validation);

export default router;
