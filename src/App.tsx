import React from 'react';
import './App.css';
import LivroLista from './LivroLista';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import LivroDados from './LivroDados';

const element = LivroLista;
function App() {
  return (
    <>
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dados">Novo</Link>
              </li>
            </ul>
        </div>
      </nav>
          <Routes>
            <Route path="/" element={<LivroLista/>}/>
            <Route path="/dados" element={<LivroDados/>}/>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
