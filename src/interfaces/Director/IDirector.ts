import { Identifiable } from '..'; 
import { ID } from '..';

export default interface Director extends Identifiable{
    id: ID,
    name: string,
    age: number,
}