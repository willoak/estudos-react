import { useContext, useEffect, useState } from "react";
import ProdutoSingle from "../components/ProdutoSingle";
import { GlobalContext } from "../GlobalContext";

const ExercicioLocalstorage = () => {
  const global = useContext(GlobalContext);

  const [dados, setDados] = useState(null);
  const [produto, setProduto] = useState(null);

  function handleClick(event) {
    setProduto(event.target.innerText);
  }
  useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((responseJson) => setDados(responseJson));
    }
  }, [produto]);

  return (
    <div>
      <h1>Localstorage</h1>
      {global.nome}
      <div>produto selecionado: {produto}</div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      <div>{dados && <ProdutoSingle dados={dados} />}</div>
    </div>
  );
};
export default ExercicioLocalstorage;
