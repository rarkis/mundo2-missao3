import React, { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function LinhaLivro(props) {
  const { livro, excluir } = props;
  if(!livro){
    console.log("undefined livro");
    return null;
  }
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
  return (
    <tr>
      <td className="titulo">
        <p>{livro.titulo}</p>
        <button
          className="btn btn-danger"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
      <td className="resumo">{livro.resumo}</td>
      <td className="editora">{nomeEditora}</td>
      <td className="autores">
        <ul>
          {livro.autores.map((autor, index) => (<li key={index}>{autor}</li>))}
        </ul>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setlivros] = useState([]);
  // console.log(livros);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setlivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };
  return (
    <>
      <main>
        <h1 className='text-center'>Catálogo de Livros</h1>
        <div className='container'>

        <table className='table table-striped'>
          <thead className='text-bg-dark table-dark'>
            <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            </tr>
          </thead>
          <tbody>
          {livros.map(livro => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
          </tbody>
        </table>
        </div>
      </main>
    </>
  );
}
