import styles from "./App.module.css";
import PeliDetalles from "./pages/PeliDetalles";
import LandingPage from "./pages/LandingPage";
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { useState } from "react";
function App() {
  const [busqueda, setBusqueda] = useState("");
  const [tablaPelis, setTablaPelis] = useState([])
  const [pelis, setPelis] = useState([]);

  const handdleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    // console.log(busqueda);
  }

  const filtrar = (terminoBusqueda) => {
    let resultadoBusqueda = tablaPelis.filter((pelicula) => {
      if (pelicula.title.toString().toLowerCase().split('-').join('').includes(terminoBusqueda.toLowerCase()) || 
        pelicula.title.toString().toLowerCase().split('-').join(' ').includes(terminoBusqueda.toLowerCase()) || 
        pelicula.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
          return pelicula;
        }
      })
    setPelis(resultadoBusqueda)
  }

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <header className={styles.header}>
          <h3>Johan Olmos</h3>
          <input onChange={handdleChange} placeholder="Buscar por nombre" value={busqueda} type="search" className={styles.barraBusqueda} />
        </header>
        <Link to="/">
          <h1 className={styles.titulo}>movies</h1>
        </Link>
        <main className={styles.main}>
          <Routes>
            <Route exact path="/" element={<LandingPage tablaPelis={tablaPelis} setTablaPelis={setTablaPelis} pelis={pelis} setPelis={setPelis} />} />
            <Route exact path="/movie/:peliId" element={<PeliDetalles />} />
            <Route path="*" element={<div>Error: 404 - Not found</div>} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          Copyright © 2021 Todo los derechos reservados | Página hecha y
          administrada by Johan F. Olmos.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
