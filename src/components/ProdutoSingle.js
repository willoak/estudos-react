const ProdutoSingle = ({ dados }) => {
  return (
    <>
      <h1>{dados.nome}</h1>
      <h3>{Number(dados.preco).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</h3>
      <img src={dados.fotos[0].src} alt={dados.nome} title={dados.nome} />
    </>
  );
};

export default ProdutoSingle;
