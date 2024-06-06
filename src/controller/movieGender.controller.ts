import { Request, Response } from "express";
import MovieGenderService from "../services/movieGender.service";
import mapStatusHTTP from "../utils/MapStatusHTTP";

export default class MovieGenderController {
  constructor (
    private movieGenderService = new MovieGenderService()
  ) { }
  
  public async findAll(_req: Request, res: Response): Promise<Response>{
    const serviceResponse = await this.movieGenderService.getAll();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  };
}