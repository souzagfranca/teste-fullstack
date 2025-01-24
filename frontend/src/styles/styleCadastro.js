import styled from "styled-components";

export const StyleCadastro = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;
export const InputsCadastro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const DivCadastro = styled.div`
  margin-top: 20px;
  text-align: right;
`;

export const ButtonCadastro = styled.button`
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${({ type }) =>
    type === "cancel" ? "#ff6b6b" : "#4caf50"};
  margin-right: ${({ type }) => (type === "cancel" ? "10px" : "0")};
`;
