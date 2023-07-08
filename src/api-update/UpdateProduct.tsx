const PathProduct = async (product): Promise<void> => {
  console.log("acva", product);
  try {
    const response = await fetch(
      `http://localhost:3001/products/${product.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (response.status === 200) {
      console.log("Producto actualizado exitosamente");
      // Realiza alguna acción adicional después de actualizar el producto
    } else {
      console.error("Error al actualizar el producto");
      // Maneja el error de acuerdo a tus necesidades
    }
  } catch (error) {
    console.error("Error de red:", error);
    // Maneja el error de red de acuerdo a tus necesidades
  }
};

export default PathProduct;
