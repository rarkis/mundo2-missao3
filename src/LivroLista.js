import React, {useState, useEffect} from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

// function LivroLista(props){
  // livro
  // excluir
// }

// LinheLivro
//  nomeEditora
//  getNomeEditora(codEditora)
// return(
//  <tr>
// )

function LinhaLivro(props) {
    const {livro, excluir} = props;
    const nomeEditora = controleEditora.getNomeEditora(
        livro.codEditora
        )
  return (
    <tr>
        <td className="titulo">
            <p>{livro.titulo}</p>
            <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>
                Excluir
            </button>
        </td>
        <td className="resumo">
            {livro.resumo}
            </td>
        <td className="editora">
            {nomeEditora}
            </td>
        <td className="autores">
            <ul>
                {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
            </ul>
        </td>
    </tr>
  )
}

function LivroLista(){
    const livros = useState([]);
    const carregado = useState(false);

    function useEffect(){
        livros = controleLivro.obterLivros();
        carregado = true;
    }

    excluir = codigo => {
        controleLivro.excluir(codigo);
        carregado = false;
    }
}
export default LivroLista;