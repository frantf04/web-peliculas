import { useEffect, useState } from "react";
import styles from "./GridPeli.module.css";
import Peliscard from "./Peliscard";
// import { get } from "../utils/httpClient";

function GridPeli() {
  const [pagina, setPagina] = useState(1)
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

  const [pelis, setPelis] = useState();
  useEffect(() => {
    fetch(`${URL_API}${API_key}&page=${pagina}&language=es-US`)
      .then(response => response.json())
      .then((data) => {
        console.log(data.results);
        setPelis(
          data.results.map((peli) => {
            return <Peliscard key={peli.id} peli={peli} />
          })

        );
      });
  }, [pagina]);
  return (
    <div>
      <ul className={styles.grid_pelis}>
        {pelis}
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
