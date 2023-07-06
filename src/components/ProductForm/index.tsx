import React, { useState } from "react";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import Product from "../../intreface/product";

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [categoria, setCategoria] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [estado, setEstado] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: Math.random().toString(),
      categoria,
      nombre_producto: nombre,
      descripcion,
      precio,
      id_estado: estado,
    };

    onAddProduct(newProduct);

    setCategoria("");
    setNombre("");
    setDescripcion("");
    setPrecio(0);
    setEstado("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
      </div>
      <div>
        <TextField
          label="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
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
        >
          <MenuItem value="">Seleccione un estado</MenuItem>
          <MenuItem value="Activo">Activo</MenuItem>
          <MenuItem value="Inactivo">Inactivo</MenuItem>
        </Select>
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Agregar Producto
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
