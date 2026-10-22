import { Sala } from "./Sala";

export class SalaComum extends Sala {
  tipo(): string {
    return "Comum";
  }
}