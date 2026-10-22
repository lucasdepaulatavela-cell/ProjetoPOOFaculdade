import { Assento } from "./Assento";

export abstract class Sala {
  constructor(
    public readonly numero: number,
    protected readonly precoBase: number,
    private readonly fileiras: number,
    private readonly assentosPorFileira: number
  ) {}

  abstract tipo(): string;

  calcularPreco(): number {
    return this.precoBase;
  }

  capacidade(): number {
    return this.fileiras * this.assentosPorFileira;
  }

  gerarAssentos(): Assento[] {
    const assentos: Assento[] = [];

    for (let f = 0; f < this.fileiras; f++) {
      const letra = String.fromCharCode(65 + f);
      for (let n = 1; n <= this.assentosPorFileira; n++) {
        assentos.push(new Assento(letra, n));
      }
    }

    return assentos;
  }
}