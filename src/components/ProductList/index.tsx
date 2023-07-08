import React, { useState } from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Product from "../../intreface/product";
import EditModal from "../EditModal";
import { useGlobalState } from "../../hooks/useContextState";

interface ProductListProps {
  products: Product[];
  handleDeleteProduct: (any) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  handleDeleteProduct,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { categorys, states } = useGlobalState();

  const handleEditProduct = (editedProduct: Product) => {
    setSelectedProduct(editedProduct);
  };

  return (
    <div>
      <List>
        {products.map((product) => (
          <ListItem key={product.sku}>
            <ListItemText
              primary={product.nombre_producto}
              secondary={<span>{product.sku}</span>}
            />
            <div style={{ marginLeft: "auto" }}>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEditProduct(product)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteProduct(product.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
      {selectedProduct && (
        <EditModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          categorys={categorys}
          states={states}
        />
      )}
    </div>
  );
};

export default ProductList;
