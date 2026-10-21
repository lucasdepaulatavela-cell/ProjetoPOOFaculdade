import { Filme } from "./models/Filme";
import { FilmeService } from "./services/FilmeService";
import { CinemaView } from "./views/CinemaView";
import { CinemaController } from "./controllers/CinemaController";

const filmeService = new FilmeService("Catálogo de filmes");

filmeService.adicionarFilme(
  new Filme("Interestelar", 169, "14 anos")
);

filmeService.adicionarFilme(
  new Filme("Divertida Mente", 95, "Livre")
);

const view = new CinemaView();
const controller = new CinemaController(view, filmeService);

controller.iniciar();