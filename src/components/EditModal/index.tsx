import React, { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Product from "../../intreface/product";

interface EditModalProps {
  product: Product;
  onUpdateProduct: (updatedProduct: Product) => void;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  product,
  onUpdateProduct,
  onClose,
}) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdateProduct(editedProduct);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Editar sku #{product.sku}</DialogTitle>
      <DialogContent>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            label="Category"
            name="categoria"
            value={editedProduct.categoria}
            onChange={handleChange}
          />
          <TextField
            label="Product Name"
            name="nombre_producto"
            value={editedProduct.nombre_producto}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            name="descripcion"
            value={editedProduct.descripcion}
            onChange={handleChange}
          />
          <TextField
            label="Price"
            name="precio"
            type="number"
            value={editedProduct.precio}
            onChange={handleChange}
          />
        </div>
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
