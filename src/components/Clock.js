import { useState, useEffect } from "react";

const Clock = (props) => {
  const [dia, setDia] = useState(null);
  const [hora, setHora] = useState(null);
  const [minutos, setMinutos] = useState(null);
  const [segundos, setSegundos] = useState(null);
  const dataFinal = props.dataFinal;
  const [estado, setEstado] = useState(true);

  //solucao usando o useCallback para evitar multiplas referencias a mesma funcao na hora de usar junto com o useEffect
  // const request = useCallback(() => {
  //   console.log("vatataytawefawe");
  //   const dataFutura = new Date(`${dataFinal} 23:59:59`).getTime();
  //   const dataAtual = new Date().getTime();
  //   const intervalo = dataFutura - dataAtual;
  //   setDia(Math.floor(intervalo / (24 * 60 * 60 * 1000)));
  //   setHora(padstart(Math.floor((intervalo / (60 * 60 * 1000)) % 24)));
  //   setMinutos(padstart(Math.floor((intervalo / (1000 * 60)) % 60)));
  //   setSegundos(padstart(Math.floor((intervalo / 1000) % 60)));
  // }, [dataFinal]);

  function padstart(value) {
    if (value === 0) return "00";
    if (value < 10) return `0${value}`;
    return value;
  }

  useEffect(() => {
    let interval = null;
    function request() {
      const dataFutura = new Date(`${dataFinal} 23:01:59`).getTime();
      const dataAtual = new Date().getTime();
      const intervalo = dataFutura - dataAtual;
      setDia(Math.floor(intervalo / (24 * 60 * 60 * 1000)));
      setHora(padstart(Math.floor((intervalo / (60 * 60 * 1000)) % 24)));
      setMinutos(padstart(Math.floor((intervalo / (1000 * 60)) % 60)));
      setSegundos(padstart(Math.floor((intervalo / 1000) % 60)));

      console.log(3);

      if (intervalo <= 0) {
        setEstado(false);
        clearInterval(interval);
      }
    }

    interval = setInterval(() => {
      request();
    }, 1000);

    if (request === 0) {
      clearInterval(interval);
    }
  }, [dataFinal, estado]);

  return (
    <>
      {estado && (
        <>
          <h1>{props.title}</h1>
          <div className="clock">
            <span className="clock__item">{dia} D</span>
            <span className="clock__item">{hora} H</span>
            <span className="clock__item">{minutos} M</span>
            <span className="clock__item">{segundos} S</span>
          </div>
        </>
      )}
      {!estado && <p>{props.mensagem}</p>}
    </>
  );
};

export default Clock;
