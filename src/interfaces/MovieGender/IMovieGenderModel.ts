import IMoiveGender from "./IMovieGender";
// import { ID } from "..";

export interface IMovieGenderModel {
  findAll(): Promise<IMoiveGender[]>,
}