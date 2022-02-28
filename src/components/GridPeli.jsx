import Peliscard from "./Peliscard";
import styles from "./GridPeli.module.css";
import { useEffect, useState } from "react";
// import { get } from "../utils/httpClient";

function GridPeli() {
  const [pagina, setPagina] = useState(1)
  const URL_API = "https://api.themoviedb.org/3/movie/popular?";
  const API_key = "api_key=e3b363ce913a40aa0545b00a3e4522ac";

  const siguiente = () => {
    setPagina(pagina + 1);
  }
  // const anterior = () => {
  //   setPagina(pagina - 1);
  // }
  const [pelis, setPelis] = useState([]);
  useEffect(() => {
    fetch(`${URL_API}${API_key}&page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        data.results.map((peli) => {
          return setPelis((e) => [...e, <Peliscard key={peli.id} peli={peli} />]);
        })
      });
  }, [pagina]);
  return (
    <div>
      <ul className={styles.grid_pelis}>
        {pelis}
      </ul>
      <div className={styles.btn_container}>
        {/* <button onClick={anterior}>Anterior</button> */}
        <button onClick={siguiente}>Ver mas</button>
      </div>
    </div>
  );
}

export default GridPeli;
