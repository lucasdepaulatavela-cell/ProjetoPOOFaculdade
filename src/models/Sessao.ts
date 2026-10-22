import { Descritivel } from "./Descritivel";
import { Filme } from "./Filme";
import { Sala } from "./Sala";
import { Assento } from "./Assento";

export class Sessao implements Descritivel {
  private readonly assentos: Assento[];

  constructor(
    public readonly filme: Filme,
    public readonly sala: Sala,
    public readonly horario: string
  ) {
    this.assentos = sala.gerarAssentos();
  }

  listarAssentos(): Assento[] {
    return [...this.assentos];
  }

  descricao(): string {
    return `${this.filme.titulo} | Sala ${this.sala.numero} (${this.sala.tipo()}) | ${this.horario} | R$ ${this.sala.calcularPreco().toFixed(2)}`;
  }
}