import { Sala } from "./Sala";

export class Sala3D extends Sala {
  tipo(): string {
    return "3D";
  }

  override calcularPreco(): number {
    return super.calcularPreco() * 1.3;
  }
}