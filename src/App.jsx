import styles from "./App.module.css";
import PeliDetalles from "./pages/PeliDetalles";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
function App() {
  const [titulo, setTitulo] = useState('movies')

  function setTitu() {
    if (window.location.href.includes('peli')) {
      setTitulo('Movies details')
    } else {
      setTitulo('Movies')
      
    }
  }
  return (
    <BrowserRouter>
      <div>
        <header  >
          <Link to="/">
            <h1 onMouseMove={setTitu} className={styles.titulo}>{ titulo }</h1>
          </Link>
        </header>
        <main onMouseMove={setTitu} className={styles.main}>
          <Routes>
            <Route exact path="/" element={<LandingPage setTitu={setTitu} />} />
            <Route exact path="/peli/:peliId" element={<PeliDetalles />} />
            <Route path="*" element={<div>Error: 404 - Not found</div>} />
          </Routes>
        </main>
        <footer>
          Copyright © 2021 Todo los derechos reservados | Página hecha y
          administrada by Johan F. Olmos.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
