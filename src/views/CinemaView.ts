import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Filme } from "../models/Filme";

export class CinemaView {
  private rl = readline.createInterface({ input, output });

  exibirMenu(): void {
    console.log("\n=== CINEMA ===");
    console.log("1 - Listar filmes");
    console.log("0 - Sair");
  }

  async lerOpcao(): Promise<string> {
    return (await this.rl.question("Escolha uma opção: ")).trim();
  }

  exibirFilmes(filmes: Filme[]): void {
    if (filmes.length === 0) {
      console.log("Nenhum filme cadastrado.");
      return;
    }
    for (const filme of filmes) {
      console.log(filme.descricao());
    }
  }

  exibirMensagem(mensagem: string): void {
    console.log(mensagem);
  }

  fechar(): void {
    this.rl.close();
  }
}