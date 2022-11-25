import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

dotenv.config();

const tokenCheck = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('authorization');
  if (!token) return res.status(401).json({ message: 'token not found' });
  req.body.user = jwt.verify(token, process.env.JWT_SECRET as string);
  next();
};

export default tokenCheck;
