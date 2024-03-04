import IMoiveActor from "./IMovieActor";
// import { ID } from "..";

export interface IMovieActorModel {
  findAll(): Promise<IMoiveActor[]>,
}