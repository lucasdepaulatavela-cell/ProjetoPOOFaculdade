import { CinemaView } from "../views/CinemaView";
import { FilmeService } from "../services/FilmeService";
import { SessaoService } from "../services/SessaoService";

export class CinemaController {
  constructor(
    private readonly view: CinemaView,
    private readonly filmeService: FilmeService,
    private readonly sessaoService: SessaoService
  ) {}

  async iniciar(): Promise<void> {
    let executando = true;

    while (executando) {
      this.view.exibirMenu();
      const opcao = await this.view.lerOpcao();

      switch (opcao) {
        case "1":
          this.view.exibirLista(this.filmeService.listarFilmes());
          break;
        case "2":
          this.view.exibirLista(this.sessaoService.listar());
          break;
        case "0":
          executando = false;
          break;
        default:
          this.view.exibirMensagem("Opção inválida.");
      }
    }

    this.view.fechar();
  }
}