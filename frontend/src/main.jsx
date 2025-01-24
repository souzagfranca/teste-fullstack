import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "styled-components";
import Home from "./pages/Home.jsx";
import EditarCadastro from "./pages/EditarCadastro.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import IncluirCadastro from "./pages/IncluirCadastro.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="editar" element={<EditarCadastro />} />
      <Route path="incluir" element={<IncluirCadastro />} />
    </Routes>
  </BrowserRouter>
);
