import { api } from "@infra/http/api";

export class ProductService {
  private routes = {
    getProducts: "/products",
    postProduct: "/products",
    getProductById: "/products/:id",
    updateProduct: "/products/:id",
    changeProductStatus: "/products/:id",
    deleteProduct: "/products/:id",
  };

  public async getProducts() {
    try {
      const response = await api.get(this.routes.getProducts);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
