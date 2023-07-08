import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import Product from "../../intreface/product";

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Detalle del producto</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Nombre: {product.nombre_producto}
        </Typography>
        <Typography variant="body1">
          Descripción: {product.descripcion}
        </Typography>
        <Typography variant="body1">Precio: {product.precio}</Typography>
        {/* Mostrar otros detalles del producto */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="secondary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDetailModal;
