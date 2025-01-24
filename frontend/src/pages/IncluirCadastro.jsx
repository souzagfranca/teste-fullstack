import React, { useState } from "react";
import {
  StyleCadastro,
  InputsCadastro,
  DivCadastro,
  ButtonCadastro,
} from "../styles/styleCadastro";
import { useNavigate } from "react-router";

const IncluirCadastro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cpfCnpj: "",
    nomeFantasia: "",
    razaoSocial: "",
    endereco: "",
    cidade: "",
    bairro: "",
    uf: "",
    cep: "",
    contato: "",
    telefoneContato: "",
    emailContato: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <StyleCadastro>
      <h2>Cadastro de Pessoas - Novo</h2>
      <form onSubmit={handleSubmit}>
        <form>
          <InputsCadastro>
            <input
              type="text"
              name="cpfCnpj"
              placeholder="CPF ou CNPJ"
              value={formData.cpfCnpj}
              onChange={handleChange}
            />
            <input
              type="text"
              name="contato"
              placeholder="Contato"
              value={formData.contato}
              onChange={handleChange}
            />
            <input
              type="text"
              name="nomeFantasia"
              placeholder="Nome Fantasia"
              value={formData.nomeFantasia}
              onChange={handleChange}
            />
            <input
              type="text"
              name="telefoneContato"
              placeholder="Telefone do Contato"
              value={formData.telefoneContato}
              onChange={handleChange}
            />
            <input
              type="text"
              name="razaoSocial"
              placeholder="Razão Social"
              value={formData.razaoSocial}
              onChange={handleChange}
            />
            <input
              type="email"
              name="emailContato"
              placeholder="E-mail do Contato"
              value={formData.emailContato}
              onChange={handleChange}
            />
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
            <input
              type="text"
              name="uf"
              placeholder="UF"
              value={formData.uf}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              value={formData.cep}
              onChange={handleChange}
            />
          </InputsCadastro>
        </form>
        <DivCadastro>
          <ButtonCadastro
            onClick={() => {
              navigate("/");
            }}
            type="cancel"
          >
            Cancelar
          </ButtonCadastro>
          <ButtonCadastro type="submit">Salvar</ButtonCadastro>
        </DivCadastro>
      </form>
    </StyleCadastro>
  );
};

export default IncluirCadastro;
