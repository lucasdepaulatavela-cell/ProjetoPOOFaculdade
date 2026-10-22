import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Descritivel } from "../models/Descritivel";

export class CinemaView {
  private rl = readline.createInterface({ input, output });

  exibirMenu(): void {
    console.log("\n=== CINEMA ===");
    console.log("1 - Listar filmes");
    console.log("2 - Listar sessões");
    console.log("0 - Sair");
  }

  async lerOpcao(): Promise<string> {
    return (await this.rl.question("Escolha uma opção: ")).trim();
  }

  exibirLista(itens: Descritivel[]): void {
    if (itens.length === 0) {
      console.log("Nada cadastrado.");
      return;
    }
    for (let i = 0; i < itens.length; i++) {
      console.log(`${i + 1}. ${itens[i].descricao()}`);
    }
  }

  exibirMensagem(mensagem: string): void {
    console.log(mensagem);
  }

  fechar(): void {
    this.rl.close();
  }
}