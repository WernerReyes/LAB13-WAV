import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { MainLayout } from "../../../layout";
import { ProductService } from "../../../services";
import { useNavigate, useParams } from "react-router-dom";
import { ProductEntity } from "../../../entities";

type Props = {
  action: "create" | "update" | "watch";
  title?: string;
};

const BASE_PRODUCT: ProductEntity = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  id: 0,
};

const productService = new ProductService();

export const FormPage = ({ action, title }: Props) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductEntity>(BASE_PRODUCT);
  const { id } = useParams<{ id: string }>();

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (action === "watch") return;

    const { id, ...rest } = product;

    if (Object.values(rest).some((value) => value === "" || value === 0)) {
      alert("Todos los campos son requeridos");
      return;
    }

    if (action === "create") {
      productService
        .create(product)
        .then(() => {
          alert("Producto creado correctamente");
        })
        .then(() => {
          navigate("/products");
        });
    } else if (action === "update") {
      if (!id || id === 0) return;
      productService
        .update({
          ...product,
          id: Number(id),
        })
        .then(() => {
          navigate("/products");
        })
        .then(() => {
          alert("Producto actualizado correctamente");
        });
    }
  };

  useEffect(() => {
    if (action === "watch" || action === "update") {
      productService.getById(Number(id)).then((response) => {
        setProduct(response.data);
      });
    }
  }, [action]);

  return (
    <MainLayout title={title || "Formulario"}>
      <Form.Group className="mb-3 container-sm">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          value={product?.name || ""}
          disabled={action === "watch"}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter product description"
          value={product?.description || ""}
          disabled={action === "watch"}
          onChange={(e) =>
            setProduct({
              ...product,
              description: e.target.value,
            })
          }
        />

        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product price"
          value={product?.price || ""}
          disabled={action === "watch"}
          onChange={(e) =>
            setProduct({
              ...product,
              price: Number(e.target.value),
            })
          }
        />

        <Form.Label>Stock</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product stock"
          value={product?.stock || ""}
          disabled={action === "watch"}
          onChange={(e) =>
            setProduct({
              ...product,
              stock: Number(e.target.value),
            })
          }
        />
        {action !== "watch" && (
          <div className="w-25 mx-auto mt-3">
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              onClick={handleSubmit}
            >
              {action === "create" ? "Crear" : "Editar"}
            </Button>
          </div>
        )}
      </Form.Group>
    </MainLayout>
  );
};
