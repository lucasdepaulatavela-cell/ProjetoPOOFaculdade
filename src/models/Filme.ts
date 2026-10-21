export class Filme {
  public readonly titulo: string;
  public readonly duracaoMinutos: number;
  public readonly classificacao: string;

  constructor(titulo: string, duracaoMinutos: number, classificacao: string) {
    this.titulo = titulo;
    this.duracaoMinutos = duracaoMinutos;
    this.classificacao = classificacao;
  }

  duracaoFormatada(): string {
    const horas = Math.floor(this.duracaoMinutos / 60);
    const minutos = this.duracaoMinutos % 60;
    return `${horas}h${minutos.toString().padStart(2, "0")}min`;
  }

  descricao(): string {
    return `${this.titulo} (${this.duracaoFormatada()}) - Classificação: ${this.classificacao}`;
  }
}