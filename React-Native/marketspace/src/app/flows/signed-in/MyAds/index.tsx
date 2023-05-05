import React, { useState } from "react";
import { MyAdsLayout } from "./layout";
import { IProduct } from "@model/Product";
import { AppError } from "@infra/http/AppError";
import { Toast } from "native-base";
import { ProductService } from "@infra/products";
import { useFocusEffect } from "@react-navigation/native";
import { loadingStates, loadingStatesEnum } from "@ts/types/loading";

export const MyAds = () => {
  const [myAds, setMyAds] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );

  const productService = new ProductService();

  const fetchMyAds = async () => {
    try {
      setLoading(loadingStatesEnum.PENDING);
      const response = await productService.getProductsByUser();
      setMyAds(response);
      setLoading(loadingStatesEnum.DONE);
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

  useFocusEffect(
    React.useCallback(() => {
      fetchMyAds();
    }, [])
  );
  return (
    <MyAdsLayout
      loading={loading === loadingStatesEnum.PENDING}
      myAds={myAds}
    />
  );
};
