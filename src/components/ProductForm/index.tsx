import React, { useState } from "react";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import Product from "../../intreface/product";
import Loading from "../Loading";

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
  categorys: string[];
  states: string[];
}

const ProductForm: React.FC<ProductFormProps> = ({
  onAddProduct,
  categorys,
  states,
}) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState(categorys);
  const [estado, setEstado] = useState(states);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      sku: Math.random(),
      nombre_categoria: categoria,
      nombre_producto: nombre,
      descripcion,
      precio,
      nombre_estado: estado,
    };

    onAddProduct(newProduct);
    setNombre("");
    setDescripcion("");
    setPrecio(0);
    setCategoria([]);
    setEstado([]);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <TextField
                label="Nombre del producto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div>
              <Select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value as string)}
                required
                displayEmpty
                inputProps={{ "aria-label": "Seleccione una categoría" }}
              >
                <MenuItem value="" disabled>
                  Seleccione una categoría
                </MenuItem>
                {categorys.map((cat) => (
                  <MenuItem key={cat.id} value={cat.nombre_categoria}>
                    {cat.nombre_categoria}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div>
              <TextField
                label="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
            </div>
            <div>
              <TextField
                label="Precio"
                type="number"
                value={precio}
                onChange={(e) => setPrecio(parseFloat(e.target.value))}
                required
              />
            </div>
            <div>
              <Select
                value={estado}
                onChange={(e) => setEstado(e.target.value as string)}
                required
                displayEmpty
                inputProps={{ "aria-label": "Seleccione un estado" }}
              >
                <MenuItem value="" disabled>
                  Seleccione un estado
                </MenuItem>
                {states.map((est) => (
                  <MenuItem key={est.id} value={est.nombre_estado}>
                    {est.nombre_estado}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div>
              <Button type="submit" variant="contained" color="primary">
                Agregar Producto
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ProductForm;
