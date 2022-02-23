import styles from "./PeliDetalles.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

function PeliDetalles() {
  const { peliId } = useParams();
  const [peli, setPeli] = useState();

  useEffect(() => {
    get(`/movie/${peliId}`).then((data) => {
      setPeli(data);
    });
  }, [peliId]);
  if (!peli) {
    return null;
  }

  const imgUrl = `https://image.tmdb.org/t/p/w500${peli.backdrop_path}`;
  return (
    <div className={styles.contenedor_detalles}>
      <img className={styles.col} src={imgUrl} alt={peli.title} />
      <div className={styles.col}>
        <p>
          <strong>Title:</strong> {peli.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {peli.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Description:</strong> {peli.overview}
        </p>
      </div>
    </div>
  );
}

export default PeliDetalles;
