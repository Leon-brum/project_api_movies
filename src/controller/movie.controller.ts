import { Request, Response } from 'express';
import MovieService from '../services/movie.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';


export default class Movieontroller {
    constructor(
        private movieService = new MovieService()
    ) {}

    public async findAll (_req: Request, res: Response): Promise<Response>{
        const serviceResponse = await this.movieService.getAll();
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async finById(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const serviceResponse = await this.movieService.getById(Number(id));

        if (serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        }
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async creatMovie(req:Request, res: Response): Promise<Response>{
        const { name, gender, launch } = req.body;
        const serviceResponse = await this.movieService.createMovie( name, gender, launch);

        if (serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        }
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

