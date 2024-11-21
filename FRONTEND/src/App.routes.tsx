import { BrowserRouter,  Navigate, Route, Routes } from "react-router-dom";
import { FormPage, ListPage } from "./pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ListPage />} />
        <Route path="/products/create" element={<FormPage title="Crear producto" action="create" />} />
        <Route path="/products/watch/:id" element={<FormPage title="Detalles del producto" action="watch" />} />
        <Route path="/products/update/:id" element={<FormPage title="Editar producto" action="update" />} />
      </Routes>
    </BrowserRouter>
  );
};
