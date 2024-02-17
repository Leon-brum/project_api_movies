import { Identifiable } from '..';
import { ID } from '..';

export default interface Actor extends Identifiable {
    id: ID,
    name: string,
    age: number
}
