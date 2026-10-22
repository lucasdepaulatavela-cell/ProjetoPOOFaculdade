import { StatusAssento } from "./StatusAssento";

export class Assento {
  public readonly fileira: string;
  public readonly numero: number;
  private status: StatusAssento = StatusAssento.LIVRE;

  constructor(fileira: string, numero: number) {
    this.fileira = fileira;
    this.numero = numero;
  }

  getStatus(): StatusAssento {
    return this.status;
  }

  estaLivre(): boolean {
    return this.status === StatusAssento.LIVRE;
  }

  reservar(): void {
    this.status = StatusAssento.RESERVADO;
  }

  liberar(): void {
    this.status = StatusAssento.LIVRE;
  }

  identificador(): string {
    return `${this.fileira}${this.numero}`;
  }
}
