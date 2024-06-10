import { Identifiable } from '..';
import { ID } from '..';

export default interface IDirector extends Identifiable {
    id: ID,
    name: string,
    age: number
}