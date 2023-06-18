import { useState } from "react";
import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros";
import {useNavigate} from "react-router-dom";
import Livro from "./modelo/Livro";

export default function LivroDados() {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  
  const opcoes = controleEditora.getEditoras().map(editora => ({value: editora.codEditora, text: editora.nome}));
  
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const navigate = useNavigate();

  const tratarCombo = (evento) =>{
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) =>{
    evento.preventDefault();
    const novoLivro = new Livro(0, codEditora, titulo, resumo, autores.split());
    controleLivro.incluir(novoLivro);
    console.log("livro" + novoLivro.titulo + novoLivro.autores );
    navigate("/");
  };


  return (
    <>
      <main>
        <div className="container">
          <h1>Dados do Livro</h1>
          <form onSubmit={incluir}>

            <div className="form-group" >
              <label htmlFor="titulo">Título</label>
              <input id="titulo" className="form-control" type="text" value={titulo} onChange={(evento) => setTitulo(evento.target.value)} />
            </div>

            <div>
              <label htmlFor="resumo">Resumo</label>
              <textarea id="resumo" className="form-control" value={resumo} onChange={(evento) => setResumo(evento.target.value)} />
            </div>

            <div>
              <label htmlFor="editora">Editora</label>
              <select id="editora" className="form-control" value={codEditora} onChange={tratarCombo}>
                {opcoes.map(editora => (<option key={editora.value} value={editora.value}>{editora.text}</option>))}
              </select>
            </div>

            <div>
              <label htmlFor="autores">Autores</label>
              <textarea id="autores" className="form-control" value={autores} onChange={(evento) => setAutores(evento.target.value)} />
            </div>

            <button className="btn btn-primary mt-2" type="submit">Salvar Dados</button>
          </form>
        </div>

      </main>
    </>
  )
};

