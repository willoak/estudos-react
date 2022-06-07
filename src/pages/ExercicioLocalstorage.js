import { useEffect, useState } from "react";
import ProdutoSingle from "../components/ProdutoSingle";

const ExercicioLocalstorage = () => {
  const [local, setLocal] = useState(() => {
    return localStorage.getItem("local");
  });
  function handleClick(event) {
    window.localStorage.setItem("local", event.target.innerText);
  }

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Exercicio Localstorage</h1>

      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};
export default ExercicioLocalstorage;
