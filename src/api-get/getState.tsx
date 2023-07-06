const GetStateProducts = async () => {
  try {
    const statePrododuct = await fetch("http://localhost:3001/states-products");
    console.log(statePrododuct);
    return statePrododuct.json();
  } catch (error) {
    console.log("Error fetching state products:", error);
    return [];
  }
};
export default GetStateProducts;
