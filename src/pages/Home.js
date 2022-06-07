const Home = () => {
  const frutas = ["banana", "cereja", "laranja", "manga", "melancia", "morango"];

  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#FFF999", "#000", "#FF0", "#F00", "#0F0", "#00F"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#987654", "#ABCDEF", "#FED4BA", "#FEDCBA", "#FE8DCBA", "#FEDCBb"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#000", "#FFF", "#FF0", "#F00", "#0F0", "#00F"],
    },
  ];

  const produtosFiltrados = produtos.filter((item) => Number(item.preco.replace("R$ ", "") > 1500));

  return (
    <>
      <h1>Home</h1>
      <p>efaiuew awuiefhaiwu ef</p>

      <ul>
        {frutas.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <hr />

      <h1>Lista de produtos</h1>

      {produtosFiltrados.map((item) => (
        <div key={item.id}>
          <h2>{item.nome}</h2>
          <p>Preço: {item.preco}</p>
          <ul>
            {item.cores.map((cor) => (
              <li key={cor} style={{ backgroundColor: cor, color: "#fff" }}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Home;
