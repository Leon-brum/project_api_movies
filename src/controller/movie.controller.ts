import { Request, Response } from 'express';
import MovieService from '../services/movie.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';


export default class MovieController {
    constructor(
        private movieService = new MovieService()
    ) {}

    public async findAll (_req: Request, res: Response): Promise<Response>{
        const serviceResponse = await this.movieService.getAll();
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async deleteMovie(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const serviceResponse = await this.movieService.deleteMovie(Number(id));

        if(serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        }
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }
}

