import { compareSync } from 'bcryptjs';
import { Request, Response } from 'express';
import UserService from '../services/user.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';
import jwt from '../jwt/jwt';
import IUser from '../interfaces/User/IUser';

interface token extends Request {
  token?: { id: string };
}

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const { status, data } = await this.userService.getByEmail(email);
    const { id, name, role, email: userEmail, password: userPassword } = data as IUser

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    if (!compareSync(password, userPassword)) {
      return res.status(mapStatusHTTP(status)).json({ message: 'email ou password invalidos!!' });
    }

    const token = jwt.sign({ id, name, role, userEmail, userPassword });

    return res.status(mapStatusHTTP(status)).json({ token });
  }

  public async findById(req: token, res: Response): Promise<Response> {
    const { token } = req;
    if (!token) return res.status(401).json({ message: 'missing token' });

    const user = await this.userService.getById(token.id) as {
      status: number, message: string
    };
    return res.status(user.status).json(user.message);
  }
}
