import { Request } from 'express';

export default interface token extends Request {
  token?: object;
}