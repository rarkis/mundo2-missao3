import React from 'react';
import './App.css';
import LivroLista from './LivroLista';

const element = LivroLista;
function App() {
  return (
    <>
      <h2>Catalogo de Livros</h2>
      <table>
        <thead>
          <th>Título</th>
          <th>Resumo</th>
          <th>Editora</th>
          <th>Autores</th>
        </thead>
        <tbody>
          <td>Título</td>
          <td>Resumo</td>
          <td>Editora</td>
          <td>Autores</td>
        </tbody>
      </table>
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
