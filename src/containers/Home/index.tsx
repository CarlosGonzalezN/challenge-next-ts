import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { Button, Modal } from "@mui/material";
import { useGlobalState } from "../../hooks/useContextState";
import ProductList from "../../components/ProductList";
import Product from "../../interface/product";
import CreateModal from "../../components/CreateModal";
import CreateProduct from "../../api-create/createProduct";
import DeleteProduct from "../../api-delete/deleteProduct";
import Loading from "../../components/Loading";

const HomePage: React.FC = () => {
  const { products, categorys, states } = useGlobalState();
  const [openModal, setOpenModal] = useState(false);
  const [productList, setProductList] = useState<Product[]>([]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddProduct = async (newProduct: Product) => {
    await CreateProduct(newProduct);
    setProductList((prevList) => [...prevList, newProduct]);
    setOpenModal(false);
  };

  const handleDeleteProduct = (productId: number) => {
    console.log(productId);

    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProductList(updatedProducts);
    DeleteProduct(productId);
  };

  useEffect(() => {
    setProductList(products);
  }, [products]);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <div>
          <Button
            style={{
              backgroundColor: "white",
              fontWeight: "bold",
              marginTop: "100px",
            }}
            onClick={handleOpenModal}
          >
            Nueva revista
          </Button>
        </div>

        <Modal open={openModal} onClose={handleCloseModal}>
          <CreateModal
            onClose={handleCloseModal}
            categorys={categorys}
            states={states}
            onAddProduct={handleAddProduct}
          />
        </Modal>
        {products ? (
          <Loading />
        ) : (
          <ProductList
            products={productList}
            handleDeleteProduct={handleDeleteProduct}
          />
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
