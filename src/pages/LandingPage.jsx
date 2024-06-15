import GridPeli from "../components/GridPeli";


function LandingPage({tablaPelis,setTablaPelis,pelis,setPelis, pagina, setPagina}) {
  return <GridPeli pagina={pagina} setPagina={setPagina} tablaPelis={tablaPelis} setTablaPelis={setTablaPelis} pelis={pelis} setPelis={setPelis} />;
}

export default LandingPage;
