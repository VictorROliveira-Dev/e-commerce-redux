import { PaginaPadrao } from "components/PaginaPadrao";
import Carrinho from "Pages/Carrinho";
import { Categoria } from "Pages/Categoria";
import { Home } from "Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
          <Route path="carrinho" element={<Carrinho />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
