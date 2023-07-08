interface ProductCreate {
  nombre_categoria: string;
  nombre_producto: string;
  descripcion: string;
  precio: number;
  nombre_estado: string;
}
const CreateProduct = async (product): Promise<void> => {
  console.log("acva", product);
  try {
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.status == 201) {
      console.log("Producto creado exitosamente");
      // Realiza alguna acción adicional después de crear el producto
    } else {
      console.error("Error al crear el producto");
      // Maneja el error de acuerdo a tus necesidades
    }
  } catch (error) {
    console.error("Error de red:", error);
    // Maneja el error de red de acuerdo a tus necesidades
  }
};
export default CreateProduct;
