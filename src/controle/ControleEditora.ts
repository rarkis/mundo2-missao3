import { error } from "console";
import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  {
    codEditora: 1,
    nome: "Editora do Brasil S/A",
  },
  {
    codEditora: 2,
    nome: "Editora Sextante",
  },
  {
    codEditora: 3,
    nome: "Martins Fontes",
  },
];

export default class ControleEditora{
  

  public getEditoras():Array<Editora>{
    return editoras;
  }


  public getNomeEditora(codBusca:number): string {
    const busca = editoras.filter(editora => editora.codEditora === codBusca);
    return busca? busca[0].nome: "inexistente";
  }
}