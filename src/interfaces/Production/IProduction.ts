import { Identifiable } from "..";
import { ID } from '..'; 

export default interface IProduction extends Identifiable {
  id: ID,
  movieId: ID,
  actorsId?: number[],
  directorId: ID,
  studioId: ID,
}