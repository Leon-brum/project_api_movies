import { Request, Response } from 'express';
import DirectorService from '../services/director.service';
import mapStatusHTTP from '../utils/MapStatusHTTP';


export default class ActorController {
    constructor(
        private directorService = new DirectorService()
    ){ }

    public async findAll(_req: Request, res: Response):Promise<Response>{
        const serviceResponse = await this.directorService.getALL();
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
    }

    public async findById(req: Request, res: Response):Promise<Response>{
        const { id } = req.params; 
        try {
            const serviceResponse = await this.directorService.getById(Number(id));

            if (serviceResponse.status !== 'SUCCESSFUL'){
                return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
            }
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        } catch (error) {
            return res.status(500).json({ message: `Erro interno: ${error}` });
        }

    }

    public async createDirector(req:Request, res:Response):Promise<Response>{
        const { name, age } = req.body;
        try {
            const serviceResponse = await this.directorService.createDirector(name, age);

            if (serviceResponse.status !== 'SUCCESSFUL'){
                return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
            } 
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
        } catch (error) {
            return res.status(500).json({ message: `Erro interno: ${error}` });
        }
       
    }

    public async deleteDirector (req:Request, res: Response):Promise<Response>{
        const { id } = req.params;
        try {
            const serviceResponse = await this.directorService.deleteDirector(Number(id));

            if (serviceResponse.status !== 'SUCCESSFUL'){
            return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        }
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data)
        } catch (error) {
            return res.status(500).json({ message: `Erro interno: ${error}` });
        }

    }
}