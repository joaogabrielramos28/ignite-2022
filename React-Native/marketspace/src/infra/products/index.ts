import { api } from "@infra/http/api";
import { CreateProductResponseDTO } from "./dtos/response/CreateProductResponseDTO";
import { CreateProductRequestDTO } from "./dtos/request/CreateProductRequestDTO";
import { IProduct } from "@model/Product";
import { GetProductRequestDTO } from "./dtos/request/GetProductRequestDTO";

export class ProductService {
  private routes = {
    getProducts: "/products",
    postProduct: "/products",
    getProductById: "/products/:id",
    updateProduct: "/products/:id",
    changeProductStatus: "/products/:id",
    deleteProduct: "/products/:id",
    addImages: "/products/images",
    productByUser: "/users/products",
  };

  public async getProducts(params: GetProductRequestDTO) {
    try {
      const response = await api.get(this.routes.getProducts, {
        params: { query: params.query },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getProductById(id: string): Promise<IProduct> {
    try {
      const response = await api.get(
        this.routes.getProductById.replace(":id", id)
      );

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

  public async deleteProduct(productId: string) {
    try {
      const response = await api.delete(
        this.routes.deleteProduct.replace(":id", productId)
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async updateProductStatus(productId: string, status: boolean) {
    try {
      const response = await api.patch(
        this.routes.changeProductStatus.replace(":id", productId),
        {
          is_active: status,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getProductsByUser(): Promise<IProduct[]> {
    try {
      const response = await api.get(this.routes.productByUser);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
