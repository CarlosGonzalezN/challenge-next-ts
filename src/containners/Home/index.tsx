import React, { useEffect, useState } from "react";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";
import Product from "../../intreface/product";
import GetProducts from "../../api-get/getProducts";
import GetCategorys from "../../api-get/getCategory";
import GetStateProducts from "../../api-get/getState";
import EditModal from "../../components/EditModal";
import CreateProduct from "../../api-create/createProduct";
import { deleteProduct } from "../../api-delete/delteProduct";
import Layout from "../Layout";
function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoria, setCategoria] = useState([]);
  const [estado, setEstado] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddProduct = async (newProduct: Product) => {
    setProducts([...products, newProduct]);
    await CreateProduct(newProduct);
  };

  const handleEditProduct = (editedProduct: Product) => {
    setSelectedProduct(editedProduct);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (productId: number) => {
    console.log(productId);

    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    deleteProduct(productId);
  };

  async function getData() {
    try {
      const dataCategoria = await GetCategorys();
      setCategoria(dataCategoria);
      const dataState = await GetStateProducts();
      setEstado(dataState);
      const data = await GetProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ProductForm
          onAddProduct={handleAddProduct}
          categorys={categoria}
          states={estado}
        />
        <ProductList
          products={products}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
      {selectedProduct && (
        <EditModal
          product={selectedProduct}
          onUpdateProduct={handleUpdateProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Layout>
  );
}

export default HomePage;
