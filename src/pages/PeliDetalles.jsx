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

  const imgUrl = `https://image.tmdb.org/t/p/w500${peli.poster_path}`;
  return (
    <div className={styles.contenedor_detalles}>
      <div className={styles.img}>
      <img  src={imgUrl} alt={peli.title} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.titulo}>
          {peli.title} ({peli.release_date.substring(0,4)})
        </p>
        <p>
          {peli.release_date.split('-').reverse().join('/')}
          <li>{peli.genres.map((genre) => genre.name).join(', ')}</li>
        </p>
        <p>
          <p>{Math.round(peli.vote_average*100).toString().substring(0,2)}%</p>
          <strong>Description:</strong> {peli.overview}
        </p>
      </div>
    </div>
  );
}

export default PeliDetalles;
