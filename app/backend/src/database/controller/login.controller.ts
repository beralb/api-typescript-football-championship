import { Request, Response } from 'express';
import loginService from '../service/login.service';
import loginSchema from '../validations/login.schema';

const loginController = async (req: Request, res: Response) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const { type, message } = await loginService(req.body);
  if (type) return res.status(type).json({ message });
  res.status(200).json({ token: message });
};

export default loginController;
