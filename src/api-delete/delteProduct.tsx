const DeleteProduct = async (productId: number): Promise<void> => {
  try {
    console.log(productId);

    const response = await fetch(
      `http://localhost:3001/products/${productId}`,
      {
        method: "DELETE",
      }
    );

    if (response.status !== 200) {
      throw new Error("Error al eliminar el producto");
    }
  } catch (error) {
    throw new Error("Error al realizar la solicitud");
  }
};
export default DeleteProduct;
