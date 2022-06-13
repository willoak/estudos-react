import { useEffect, useState } from "react";
import Clock from "../components/Clock";

const UseEfect = () => {
  const [contar, setContar] = useState(0);

  useEffect(() => {
    document.title = `Contar ${contar}`;
  }, [contar]);
  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      <hr />

      <h3>Mostrar horas faltante</h3>

      <Clock title="Dias para o Natal" dataFinal="2022-06-14" />

      <Clock title="Dias para o Futebol" dataFinal="2022-07-14" />

      <Clock title="Dias para 2027" dataFinal="2027-06-14" />
    </>
  );
};

export default UseEfect;
