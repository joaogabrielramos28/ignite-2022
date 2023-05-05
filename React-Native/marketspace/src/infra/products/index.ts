import { api } from "@infra/http/api";
import { CreateProductResponseDTO } from "./dtos/response/CreateProductResponseDTO";
import { CreateProductRequestDTO } from "./dtos/request/CreateProductRequestDTO";

export class ProductService {
  private routes = {
    getProducts: "/products",
    postProduct: "/products",
    getProductById: "/products/:id",
    updateProduct: "/products/:id",
    changeProductStatus: "/products/:id",
    deleteProduct: "/products/:id",
    addImages: "/products/images",
  };

  public async getProducts() {
    try {
      const response = await api.get(this.routes.getProducts);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async createProduct(
    payload: CreateProductRequestDTO
  ): Promise<CreateProductResponseDTO> {
    try {
      const response = await api.post<CreateProductResponseDTO>(
        this.routes.postProduct,
        payload
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async addImages(formData: FormData) {
    try {
      const response = await api.post(this.routes.addImages, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
