import Livro from "../modelo/Livro";

const livros: Livro[] = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "A Revolução dos Bichos",
    resumo:
      "A Revolução dos Bichos é uma fábula clássica escrita por George Orwell. Situada em uma fazenda, a história narra a rebelião dos animais contra os humanos e sua luta para estabelecer uma sociedade justa. Uma crítica satírica aos regimes totalitários, este livro oferece uma reflexão profunda sobre poder, corrupção e manipulação política.",
    autores: ["George Orwell"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "A Coragem de Ser Imperfeito",
    resumo:
      "A Coragem de Ser Imperfeito, escrito por Brené Brown, é um livro inspirador sobre a importância da vulnerabilidade e da aceitação de si mesmo. A autora compartilha suas próprias experiências e pesquisas, destacando a necessidade de abraçar a imperfeição e cultivar a autenticidade. Com insights perspicazes e conselhos práticos, este livro é uma leitura transformadora para quem busca viver uma vida plena e significativa.",
    autores: ["Brené Brown"],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "O Senhor dos Anéis",
    resumo:
      "O Senhor dos Anéis é uma trilogia épica de fantasia escrita por J.R.R. Tolkien. A história se passa em um mundo fictício chamado Terra-média e acompanha a jornada de um grupo de personagens em busca de destruir um poderoso anel. Com uma narrativa rica, personagens cativantes e um mundo detalhado, esta obra é considerada um clássico da literatura fantástica.",
    autores: ["J.R.R. Tolkien"],  
  },
];

export default class ControleLivro {
  public obterLivros():Livro[]{
    return livros
  }

  public incluir(novoLivro: Livro):void {
    novoLivro.codigo = livros.length > 0 ? livros.at(-1)!.codigo+1:1;
    livros.push(novoLivro);
  }

  public excluir(codBusca: number):void{
    const busca = livros.findIndex(livro => livro.codigo === codBusca);
    if (busca !== -1) {
      livros.splice(busca, 1);
    }
  }
}