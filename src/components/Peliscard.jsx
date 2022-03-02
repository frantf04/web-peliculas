import { Link } from "react-router-dom";
import styles from "./Peliscard.module.css";

function peliscard({ peli, setTitu }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300";
  return (
    <li  onClick={setTitu} className={styles.peli_card}>
      <Link to={"/movie/" + peli.id}>
      <img
        width={230}
        height={345}
        className={styles.peli_img}
        src={`${imgUrl}${peli.poster_path}`}
        alt={peli.title}
        />
        </Link>
      <div>{peli.title}</div>
    </li>
  );
}

export default peliscard;
