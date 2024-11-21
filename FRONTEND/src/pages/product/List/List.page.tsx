import { Button, Table } from "react-bootstrap";
import { ProductService } from "../../../services";
import { useEffect, useState } from "react";
import { ProductEntity } from "../../../entities";
import { MainLayout } from "../../../layout";
import { useNavigate } from "react-router-dom";

const productService = new ProductService();

export const ListPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductEntity[]>([]);

  useEffect(() => {
    productService.getAll().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <MainLayout title="Lista de Productos">
      <Button
        variant="primary"
        className="mb-4"
        onClick={() => navigate("/products/create")}
      >
        Crear producto
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.stock}</td>
              <td className="d-flex justify-content-evenly flex-wrap gap-2">
                <Button
                  variant="info"
                  onClick={() => navigate(`/products/watch/${product.id}`)}
                >
                  Ver
                </Button>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/products/update/${product.id}`)}
                >
                  Editar
                </Button>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainLayout>
  );
};
