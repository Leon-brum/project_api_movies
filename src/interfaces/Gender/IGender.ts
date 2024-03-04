import { Identifiable } from '..';
import { ID } from '..';

export default interface IGender extends Identifiable {
  id: ID,
  name: string,
}