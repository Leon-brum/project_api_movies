import { Identifiable } from '..'; 
import { ID } from '..'; 

export default interface Studio extends Identifiable {
    id: ID,
    name: string 
}