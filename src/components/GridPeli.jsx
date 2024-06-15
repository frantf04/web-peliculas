import { useEffect, useState } from "react";
import styles from "./GridPeli.module.css";
import Peliscard from "./Peliscard";
// import { get } from "../utils/httpClient";

function GridPeli({setTablaPelis,pelis,setPelis, pagina, setPagina}) {
  const URL_API = "https://api.themoviedb.org/3/movie/popular?";
  const API_key = "api_key=e3b363ce913a40aa0545b00a3e4522ac";

  const siguiente = () => {
    if (pagina < 1000) {
      setPagina(pagina + 1);
    }
  }
  const anterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);

    }
  }

  useEffect(() => {
    fetch(`${URL_API}${API_key}&page=${pagina}&language=es-US`)
      .then(res => res.json())
      .then((datos) => {
        // console.log(datos.results);
        setTablaPelis(datos.results)
        setPelis(datos.results);
      });
    
    
  }, [pagina,setTablaPelis, setPelis]);
  return (
    <div>
      <ul className={styles.grid_pelis}>
        {pelis.map(peli => {
         return <Peliscard key={peli.id} peli={peli}/>
        })}
      </ul>
      <div className={styles.btn_container}>
        <button onClick={anterior}>anterior</button>
        <p>{pagina}</p>
        <button onClick={siguiente}>siguiente</button>
      </div>
    </div>
  );
}


export default GridPeli;
