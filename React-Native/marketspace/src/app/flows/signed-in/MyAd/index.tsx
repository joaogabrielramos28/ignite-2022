import React, { useEffect, useState } from "react";

import {
  useNavigation,
  useRoute,
  StackActions,
} from "@react-navigation/native";
import { MyAdParams } from "@routes/app.routes";
import { useAuth } from "@hooks/network/useAuth";
import { ProductService } from "@infra/products";
import { Toast } from "native-base";
import { AppError } from "@infra/http/AppError";
import { MyAdLayout } from "./layout";
import { IProduct } from "@model/Product";
import { loadingStates, loadingStatesEnum } from "@ts/types/loading";

export const MyAd = () => {
  const route = useRoute();
  const { dispatch } = useNavigation();
  const { adId } = route.params as MyAdParams;
  const [data, setData] = useState<IProduct>({} as IProduct);

  const [loadingData, setLoadingData] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );

  const productService = new ProductService();

  const fetchAd = async () => {
    try {
      setLoadingData(loadingStatesEnum.PENDING);
      const response = await productService.getProductById(adId);
      setData(response);

      setLoadingData(loadingStatesEnum.DONE);
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

  const goBack = () => {
    dispatch(StackActions.popToTop());
  };

  const deleteAd = async () => {
    try {
      await productService.deleteProduct(adId);
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

  const disableAd = async () => {
    try {
      await productService.updateProductStatus(adId);
      Toast.show({
        title: "Anúncio desativado",
        placement: "top",
        bgColor: "blue.300",
      });
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

  useEffect(() => {
    fetchAd();
  }, []);

  return (
    <MyAdLayout
      goBack={goBack}
      data={data}
      loading={loadingData === loadingStatesEnum.PENDING}
      deleteAd={deleteAd}
      disableAd={disableAd}
    />
  );
};
