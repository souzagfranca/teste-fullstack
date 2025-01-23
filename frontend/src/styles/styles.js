import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Pesquisa = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
`;

export const Inputs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px, solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  padding: ${({ type }) => (type === "filtrar" ? "6px 12px" : "8px 16px")};
  margin-bottom: ${({ type }) => (type === "incluir" ? "10px" : "0")};
`;

export const ButtonAcao = styled.button`
  margin-right: 5px;
  cursor: pointer;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;
