import { Identifiable } from "..";

export default interface User extends Identifiable {
  id: number,
  role: string,
  name: string,
  email: string,
  password: string,
}