import { Request, Response } from 'express'; 
import StudioService from '../services/studio.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';

export default class StudioController {
    constructor(
        private studioService = new StudioService()
    ){}

    public async findAll (_req: Request, res: Response): Promise<Response>{
        const serviceResponse = await this.studioService.getAll();
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async findById(req: Request, res: Response):
    Promise<Response>{
        const { id } = req.params;
        const serviceResponse = await this.studioService.getById(Number(id));

        if (serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        }
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async createStudio(req: Request, res: Response):
    Promise<Response>{
        const { name } = req.body;
        const serviceResponse = await this.studioService.createStudio(name);

        if(serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        }
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async deleteStudio(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const serviceResponse = await this.studioService.deleteStudio(Number(id));

        if (serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        }
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }
} 