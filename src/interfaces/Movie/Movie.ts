import { Identifiable } from '..'; 
import { ID } from '..'; 

export default interface Movie extends Identifiable {
    id: ID,
    name: string,
    gender: string,
    launch: Date,
}