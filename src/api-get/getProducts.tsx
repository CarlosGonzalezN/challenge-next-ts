const GetProducts = async () => {
  try {
    const ProductData = await fetch("http://localhost:3001/products");
    return ProductData.json();
  } catch (error) {
    console.log("Error fetching state products:", error);
    return [];
  }
};
export default GetProducts;
