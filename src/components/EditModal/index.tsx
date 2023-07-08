import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
} from "@mui/material";
import Product from "../../intreface/product";
import PathProduct from "../../api-update/UpdateProduct";

interface EditModalProps {
  product: Product;
  onClose: () => void;
  categorys: string[];
  states: string[];
}

const EditModal: React.FC<EditModalProps> = ({
  product,
  onClose,
  categorys,
  states,
}) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    setNombre(product.nombre_producto);
    setDescripcion(product.descripcion);
    setPrecio(product.precio);
    setCategoria(product.nombre_categoria);
    setEstado(product.nombre_estado);
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const UpdateProduct = (updatedProduct: Product) => {
    // Lógica para actualizar el producto
    PathProduct(updatedProduct);
    console.log("Actualizar producto:", updatedProduct);
  };

  const handleUpdate = () => {
    UpdateProduct(editedProduct);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Editar sku #{product.sku}</DialogTitle>
      <DialogContent>
        <form onSubmit={UpdateProduct}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <TextField
                label="Nombre del producto"
                name="nombre_producto"
                value={nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Select
                label="Categoría"
                name="nombre_categoria"
                value={categoria}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Seleccione una categoría</MenuItem>
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
                name="descripcion"
                value={descripcion}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <TextField
                label="Precio"
                type="number"
                name="precio"
                value={precio}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Select
                label="Estado"
                name="nombre_estado"
                value={estado}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Seleccione un estado</MenuItem>
                {states.map((est) => (
                  <MenuItem key={est.id} value={est.nombre_estado}>
                    {est.nombre_estado}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleUpdate} variant="contained" color="primary">
          Update
        </Button>
        <Button onClick={onClose} variant="contained" color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
