import { Sessao } from "../models/Sessao";

export class SessaoService {
  private sessoes: Sessao[] = [];

  adicionar(sessao: Sessao): void {
    this.sessoes.push(sessao);
  }

  listar(): Sessao[] {
    return [...this.sessoes];
  }
}