import { CinemaView } from "../views/CinemaView";
import { FilmeService } from "../services/FilmeService";

export class CinemaController {
  private readonly view: CinemaView;
  private readonly filmeService: FilmeService;

  constructor(view: CinemaView, filmeService: FilmeService) {
    this.view = view;
    this.filmeService = filmeService;
  }

  async iniciar(): Promise<void> {
    let executando = true;

    while (executando) {
      this.view.exibirMenu();
      const opcao = await this.view.lerOpcao();

      switch (opcao) {
        case "1":
          this.view.exibirFilmes(this.filmeService.listarFilmes());
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