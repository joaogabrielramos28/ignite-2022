import React from "react";
import { PreviewAdLayout } from "./layout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PreviewAdParams } from "@routes/app.routes";
import { useAuth } from "@hooks/network/useAuth";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ProductService } from "@infra/products";
import { Toast } from "native-base";
import { AppError } from "@infra/http/AppError";

export const PreviewAd = () => {
  const route = useRoute();
  const { user } = useAuth();
  const { goBack } = useNavigation();
  const data = route.params as PreviewAdParams["data"];

  const productService = new ProductService();

  const handleAddProductsImages = async (productId: string) => {
    try {
      const formData = new FormData();

      data.images.forEach((image, index) => {
        const fileExtension = image.split(".").pop();

        formData.append("images", {
          name: `${productId}-${index}.${fileExtension}`.toLowerCase(),
          uri: image,
          type: "image/png",
        } as any);
      });

      formData.append("product_id", productId);

      productService.addImages(formData);
    } catch (err) {
      throw err;
    }
  };

  const handleCreateAd = async () => {
    try {
      const product = await productService.createProduct({
        name: data.title,
        accept_trade: data.acceptExchange,
        description: data.description,
        is_new: data.type === "new",
        payment_methods: data.paymentMethods,
        price: Number(data.price),
      });

      await handleAddProductsImages(product.id);

      goBack();
    } catch (err) {
      const isAppError = err instanceof AppError;
      const title = isAppError ? err.message : "Erro ao criar anúncio";
      Toast.show({
        title,
        placement: "top",
        bgColor: "red.300",
      });
    }
  };

  return (
    <PreviewAdLayout
      data={data}
      user={user}
      goBack={goBack}
      handleCreateAd={handleCreateAd}
    />
  );
};
