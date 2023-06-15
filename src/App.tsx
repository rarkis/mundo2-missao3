import React from 'react';
import './App.css';
import LivroLista from './LivroLista';

const element = LivroLista;
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav"> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Catálogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/livro-dados">Novo</a>
              </li>
            </ul>
          {/* </div> */}
        </div>
      </nav>
          <LivroLista/>
      {/* <h1 className='text-center'>Catálogo de Livros</h1>
      <div className='container'>

      <table className='table table-striped'>
        <thead className='text-bg-dark table-dark'>
          <th>Título</th>
          <th>Resumo</th>
          <th>Editora</th>
          <th>Autores</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Título</p>
              <button className='btn btn-danger'>Excluir</button>

            </td>
            <td>Resumo</td>
            <td>Editora</td>
            <td>Autores</td>
          </tr>
          <tr>
            <td>
              <p>Título</p>
              <button className='btn btn-danger'>Excluir</button>

            </td>
            <td>Resumo</td>
            <td>Editora</td>
            <td>Autores</td>
          </tr>
        </tbody>
      </table>
      </div> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
