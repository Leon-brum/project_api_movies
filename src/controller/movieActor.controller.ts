import { Request, Response } from "express";
import MovieActorService from "../services/movieActor.service";
import mapStatusHTTP from "../utils/MapStatusHTTP";

export default class MovieActorController {
  constructor (
    private movieActorService = new MovieActorService()
  ) { }
  
  public async findAll(_req: Request, res: Response): Promise<Response>{
    const serviceResponse = await this.movieActorService.getAll();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  };
}