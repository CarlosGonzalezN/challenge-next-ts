import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

interface CreateModalProps {
  onAddProduct: (any) => void;
  onClose: () => void;
  categorys: string[];
  states: string[];
}
interface NewProduct {
  sku: string;
  nombre_categoria: string;
  nombre_producto: string;
  descripcion: string;
  precio: number;
  nombre_estado: string;
}

const CreateModal: React.FC<CreateModalProps> = ({
  onAddProduct,
  onClose,
  categorys,
  states,
}) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: NewProduct = {
      sku: window.crypto.randomUUID(),
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
    setCategoria("");
    setEstado("");
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Nueva revista</DialogTitle>
      <DialogContent>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="secondary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateModal;
