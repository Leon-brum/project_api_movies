import { Request, Response } from 'express';
import ActorService from '../services/actor.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';


export default class ActorController {
    constructor(
        private actorService = new ActorService()
    ){ }

    public async findAll(_req: Request, res: Response):Promise<Response>{
        const serviceResponse = await this.actorService.getALL();
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async findById(req: Request, res: Response):Promise<Response>{
        const { id } = req.params; 
        const serviceResponse = await this.actorService.getById(Number(id));

        if (serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        }
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async createActor(req:Request, res:Response):Promise<Response>{
        const { name, age } = req.body;
        const serviceResponse = await this.actorService.createActor(name, age);

        if (serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        } 
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async deleteActor (req:Request, res: Response):Promise<Response>{
        const { id } = req.params;
        const serviceResponse = await  this.actorService.deleteActor(Number(id));

        if (serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        }
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }
}