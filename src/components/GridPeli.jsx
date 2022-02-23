import Peliscard from "./Peliscard";
import styles from "./GridPeli.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

function GridPeli({setTitu}) {
  const [pelis, setPelis] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setPelis(data.results);
    });
  }, []);
  return (
    <div>
      <ul className={styles.grid_pelis}>
        {pelis.map((peli) => {
          return <Peliscard setTitu={setTitu} key={peli.id} peli={peli} />;
        })}
      </ul>
    </div>
  );
}

export default GridPeli;
