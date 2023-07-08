import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Product from "../../intreface/product";

interface ProductListProps {
  products: Product[];
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onEditProduct,
  onDeleteProduct,
}) => {
  return (
    <div>
      <List>
        {products.map((product) => (
          <ListItem key={product.sku}>
            <ListItemText
              primary={product.nombre_producto}
              secondary={
                <>
                  <span>{product.sku}</span>
                  <span>{product.precio}</span>
                </>
              }
            />
            <div style={{ marginLeft: "auto" }}>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => onEditProduct(product)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onDeleteProduct(product.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ProductList;
