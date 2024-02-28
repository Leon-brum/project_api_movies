import { Identifiable } from '..'; 
import { ID } from '..'; 

export default interface Movie extends Identifiable {
  id: ID,
  name: string,
  launch: Date,
  studioId: number,
  directorId: number,
}