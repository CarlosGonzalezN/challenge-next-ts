const GetProducts = async () => {
  try {
    const ProductData = await fetch("http://localhost:3001/products");
    console.log(ProductData);
    return ProductData.json();
  } catch (error) {
    console.log("Error fetching state products:", error);
    return [];
  }
};
export default GetProducts;
