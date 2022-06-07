import { useState } from "react";
import ProdutoSingle from "../components/ProdutoSingle";

const Exercicio = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(false);
  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    const responseJson = await response.json();
    setDados(responseJson);
    setCarregando(false);
  }
  return (
    <div>
      <h1>Exercicio</h1>

      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>

      <div id="resultado">
        {carregando && <p>carregando...</p>}
        {!carregando && dados && <ProdutoSingle dados={dados} />}
      </div>
    </div>
  );
};
export default Exercicio;
