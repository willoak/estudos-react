import Header from "./components/Header";
import { GlobalStorage } from "./GlobalContext";
import Exercicio from "./pages/Exercicio";
import ExercicioLocalstorage from "./pages/ExercicioLocalstorage";
import Home from "./pages/Home";
import UseEfect from "./pages/useEfect";
import "./css/global.css";

const App = () => {
  let Pagina = Home;
  const pathName = window.location.pathname;
  if (pathName === "/") {
    Pagina = Home;
  } else if (pathName === "/exercicio") {
    Pagina = Exercicio;
  } else if (pathName === "/useeffect") {
    Pagina = UseEfect;
  } else if (pathName === "/exercicio-localstorage") {
    Pagina = ExercicioLocalstorage;
  } else {
    return null;
  }

  return (
    <>
      <GlobalStorage>
        <Header />
        <Pagina />
      </GlobalStorage>
    </>
  );
};

export default App;
