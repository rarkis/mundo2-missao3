import { useState } from "react";
import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros";
import {useNavigate} from "react-router-dom";
import Livro from "./modelo/Livro";

export default function LivroDados() {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  
  const opcoes = controleEditora.getEditoras().map(editora => ({value: editora.codEditora}, {text: editora.nome}));
  console.log(opcoes[0].name);
  
  const [titulo, setTitulo] = useState("teste");
  const [resumo, setResumo] = useState("teste");
  const [autores, setAutores] = useState("teste teste teste");
  const [codEditora, setCodEditora] = useState(opcoes[0]);
  const navigate = useNavigate();

  const tratarCombo = (evento) =>{
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) =>{
    evento.preventDefault();
    const livro = new Livro({codigo: 0, codEditora: codEditora, titulo: titulo, resumo: resumo, autores: autores.split()});
    // controleLivro.incluir(livro);
    console.log("livro" + livro.titulo);
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
                <option>
                  teste
                </option>
                {/* {opcoes.map(editora => (
                  <option value={editora.codEditora} key={editora.codEditora}>
                    {editora.name}
                  </option>
                ))} */}
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

