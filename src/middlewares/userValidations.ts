import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import token from '../interfaces/IJwt'

import 'dotenv';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

export default class userValidation {
  // eslint-disable-next-line complexity
  static login(req: Request, res: Response, next: NextFunction): Response | void {
    const login = req.body;
    const reqKeys = ['email', 'password'];
    const notFoundKey = reqKeys.find((key) => !(key in login));
    const regex = /\S+@\S+\.\S+/;

    if(notFoundKey) {
      return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
    }
    if(!login.password || !login.email) {
      return res.status(400).json({ message: 'Todos os campos devem ser preenchidos!' })
    }
    if(login.password.length < 8 || !regex.test(login.email)) {
      return res.status(401).json({ message: 'email ou password invalidos!' })
    }
    next()
  }

  static async token(
    req: token,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado!' });
    }
    try {
      const emptyToken = authorization.replace('Bearer ', '');
      const tokenValid = await jwt.verify(emptyToken, JWT_SECRET);
      req.token = tokenValid as object;

      return next();
    } catch (error) {
      return res.status(401).json({ message: 'O token deve ser válido!' });
    }
  }
}