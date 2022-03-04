import GridPeli from "../components/GridPeli";


function LandingPage({tablaPelis,setTablaPelis,pelis,setPelis}) {
  return <GridPeli tablaPelis={tablaPelis} setTablaPelis={setTablaPelis} pelis={pelis} setPelis={setPelis} />;
}

export default LandingPage;
