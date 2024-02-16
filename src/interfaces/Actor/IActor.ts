import { Identifiable } from '..';

export default interface Actor extends Identifiable {
    id: number,
    name: string,
    age: number
}