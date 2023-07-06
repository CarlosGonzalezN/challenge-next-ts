import React, { useState } from "react";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";
import Product from "../../intreface/product";
import Navbar from "../../components/Navar";
import Footer from "../../components/Footer";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (editedProduct: Product) => {
    const updatedProducts = products.map((product) =>
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

  return (
    <div>
      <Navbar />
      <h1>Lista de Productos</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
