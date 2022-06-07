import { useEffect, useState } from "react";

const UseEfect = () => {
  const [contar, setContar] = useState(0);

  useEffect(() => {
    document.title = `Contar ${contar}`;
  }, [contar]);
  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default UseEfect;
