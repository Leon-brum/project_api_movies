import { Request, Response } from "express";
import UserService from "../services/user.service";
import mapStatusHTTP from "../utils/MapStatusHTTP";

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async getAllUsers(_req: Request, res: Response) {
    const serviceResponse = await this.userService.getAllUsers();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
  }

  public async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.userService.getById(Number(id));
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
