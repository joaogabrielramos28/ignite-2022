import { ProductService } from "@infra/products";

export const useProducts = () => {
  const productService = new ProductService();

  const getProducts = async () => {
    try {
      const data = await productService.getProducts();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getProducts,
  };
};
