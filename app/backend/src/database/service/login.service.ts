import * as dotenv from 'dotenv';
import { compareSync } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import ILogin from '../interfaces/login/Ilogin';
import User from '../models/User';

dotenv.config();

const loginService = async (body: ILogin): Promise<{
  type: number | null,
  message: string
}> => {
  const data = await User.findOne({ where: { email: body.email } });
  const responseData = data?.dataValues;

  if (!responseData || !compareSync(body.password, responseData.password)) {
    return { type: 401, message: 'Incorrect email or password' };
  }

  const { email, id, username, role } = responseData;
  const token = jwt.sign({ email, id, username, role }, process.env.JWT_SECRET as string);
  return { type: null, message: token };
};

export default loginService;
