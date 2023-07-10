interface Product {
  id: number;
  sku: string;
  nombre_categoria: string | string[];
  nombre_producto: string;
  descripcion: string;
  precio: number;
  nombre_estado: string[];
}

export default Product;
