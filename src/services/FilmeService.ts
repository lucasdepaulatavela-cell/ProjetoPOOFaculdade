import { Filme } from "../models/Filme";

export class FilmeService {
  public readonly nome: string;
  private filmes: Filme[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionarFilme(filme: Filme): void {
    this.filmes.push(filme);
  }

  listarFilmes(): Filme[] {
    return [...this.filmes];
  }
}