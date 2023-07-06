import React, { useEffect, useState } from "react";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";
import Product from "../../intreface/product";
import GetProducts from "../../api-get/getProducts";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = async (editedProduct: Product) => {
    const updatedProducts = await products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId: string) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };
  async function dataProduct() {
    const data = await GetProducts();

    setProducts(data);
  }
  useEffect(() => {
    dataProduct();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ProductForm onAddProduct={handleAddProduct} />
        <ProductList
          products={products}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
    </>
  );
}

export default HomePage;
