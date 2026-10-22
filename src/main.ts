import { Filme } from "./models/Filme";
import { SalaComum } from "./models/SalaComum";
import { Sala3D } from "./models/Sala3D";
import { Sessao } from "./models/Sessao";
import { FilmeService } from "./services/FilmeService";
import { SessaoService } from "./services/SessaoService";
import { CinemaView } from "./views/CinemaView";
import { CinemaController } from "./controllers/CinemaController";

const sala1 = new SalaComum(1, 20, 5, 8);
const sala2 = new Sala3D(2, 20, 5, 8);

const HTYD = new Filme("Como Treinar seu Dragão 3", 104, "Livre");
const intocaveis = new Filme("Intocáveis", 112, "14 Anos");

const filmeService = new FilmeService();
filmeService.adicionarFilme(HTYD);
filmeService.adicionarFilme(intocaveis);

const sessaoService = new SessaoService();
sessaoService.adicionar(new Sessao(HTYD, sala2, "20:00"));
sessaoService.adicionar(new Sessao(intocaveis, sala1, "14:00"));
sessaoService.adicionar(new Sessao(intocaveis, sala1, "16:30"));

const view = new CinemaView();
const controller = new CinemaController(view, filmeService, sessaoService);

controller.iniciar();


//node --import tsx src/main.ts
//npx tsx src/main.ts