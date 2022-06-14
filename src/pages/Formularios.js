import { useState } from "react";

const Formularios = () => {
  const [dadosForm, setDadosForm] = useState({
    nome: "willian",
    email: "email@email.com",
    senha: "123",
    cep: "123",
    rua: "123",
    numero: "123",
    bairro: "123",
    cidade: "123",
    estado: "123",
  });
  const [mensagem, setMensagem] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosForm),
    };

    fetch("https://ranekapi.origamid.dev/json/api/usuario", options).then((response) => {
      console.log(response);
      console.log(response.status);
      if (response.status === 200) {
        setMensagem("Mensagem enviada com sucesso");
      } else {
        setMensagem("deu ruim no envio");
      }
    });
  }

  function handleForm({ target }) {
    const { id, value } = target;
    setDadosForm({ ...dadosForm, [id]: value });
  }
  return (
    <>
      <h1>Formulários</h1>
      <form onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="nome">Nome</label>
          <input name="nome" type="text" id="nome" value={dadosForm.nome} onChange={handleForm} />
        </div>
        <div className="item">
          <label htmlFor="email">email</label>
          <input name="email" type="email" id="email" value={dadosForm.email} onChange={handleForm} />
        </div>

        <div className="item">
          <label htmlFor="senha">senha</label>
          <input name="senha" type="text" id="senha" value={dadosForm.senha} onChange={handleForm} />
        </div>
        <div className="item">
          <label htmlFor="cep">cep</label>
          <input name="cep" type="text" id="cep" value={dadosForm.cep} onChange={handleForm} />
        </div>

        <div className="item">
          <label htmlFor="rua">rua</label>
          <input name="rua" type="text" id="rua" value={dadosForm.rua} onChange={handleForm} />
        </div>
        <div className="item">
          <label htmlFor="numero">numero</label>
          <input name="numero" type="text" id="numero" value={dadosForm.numero} onChange={handleForm} />
        </div>

        <div className="item">
          <label htmlFor="bairro">bairro</label>
          <input name="bairro" type="text" id="bairro" value={dadosForm.bairro} onChange={handleForm} />
        </div>
        <div className="item">
          <label htmlFor="cidade">cidade</label>
          <input name="cidade" type="text" id="cidade" value={dadosForm.cidade} onChange={handleForm} />
        </div>

        <div className="item">
          <label htmlFor="estado">estado</label>
          <input name="estado" type="text" id="estado" value={dadosForm.estado} onChange={handleForm} />
        </div>

        <hr />
        <div className="item">
          <button>Enviar</button>
        </div>
      </form>

      {mensagem}
    </>
  );
};

export default Formularios;
