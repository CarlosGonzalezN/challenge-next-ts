const GetCategorys = async () => {
  try {
    const categorysPrododuct = await fetch("http://localhost:3001/categorys");
    console.log(categorysPrododuct);
    return categorysPrododuct.json();
  } catch (error) {
    console.log("Error fetching state products:", error);
    return [];
  }
};
export default GetCategorys;
