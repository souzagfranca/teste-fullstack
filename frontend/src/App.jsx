import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonAcao,
  Container,
  Input,
  Inputs,
  Pesquisa,
  Table,
} from "./styles/styles";
import { GlobalStyles } from "./styles/globalStyles";
import listaPessoa from "./services/Requests";

const App = () => {
  useEffect(() => {
    const listarPessoas = async () => {
      try {
        const response = await listaPessoa();
        setPessoas(response);
        console.log(pessoas);
      } catch (error) {
        console.log("Erro ao buscar pessoas:", error);
      }
    };

    listarPessoas();
  }, []);

  const [pessoas, setPessoas] = useState([]);
  const [status, setStatus] = useState();

  const [filtro, setFiltro] = useState({
    codigo: "",
    nomeFantasia: "",
    razaoSocial: "",
  });

  const handleFiltroChange = (e) => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  };

  const filtrarPessoas = () => {
    // Lógica de filtro (adaptar conforme necessidade)
    console.log("Filtros aplicados:", filtro);
  };

  return (
    <Container>
      <GlobalStyles />
      <h3>Listagem de Pessoa</h3>
      <Pesquisa>
        <h4>Pesquisa</h4>
        <Inputs>
          <Input
            type="text"
            name="codigo"
            placeholder="Código"
            value={filtro.codigo}
            onChange={handleFiltroChange}
          />
          <Input
            type="text"
            name="nomeFantasia"
            placeholder="Nome Fantasia"
            value={filtro.nomeFantasia}
            onChange={handleFiltroChange}
          />
          <Input
            type="text"
            name="razaoSocial"
            placeholder="Razão Social"
            value={filtro.razaoSocial}
            onChange={handleFiltroChange}
          />
          <Button type="filtrar" onClick={filtrarPessoas}>
            Filtrar
          </Button>
        </Inputs>
      </Pesquisa>
      <Button type="incluir">Incluir</Button>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cidade</th>
            <th>UF</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.map((pessoa) => (
            <tr key={pessoa._id}>
              <td>{pessoa.nome}</td>
              <td>{pessoa.cidade}</td>
              <td>{pessoa.uf}</td>
              <td>{status}</td>
              <td>
                <ButtonAcao>👁️</ButtonAcao>
                <ButtonAcao>✏️</ButtonAcao>
                <ButtonAcao>🗑️</ButtonAcao>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
