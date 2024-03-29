import React, { useEffect, useState } from "react";

import {
  useNavigation,
  useRoute,
  StackActions,
} from "@react-navigation/native";
import { AdParams } from "@routes/app.routes";
import { useAuth } from "@hooks/network/useAuth";
import { ProductService } from "@infra/products";
import { Toast } from "native-base";
import { AppError } from "@infra/http/AppError";
import { AdLayout } from "./layout";
import { IProduct } from "@model/Product";
import { loadingStates, loadingStatesEnum } from "@ts/types/loading";
import { Linking } from "react-native";

export const Ad = () => {
  const route = useRoute();
  const { dispatch } = useNavigation();
  const { adId } = route.params as AdParams;
  const [data, setData] = useState<IProduct>({} as IProduct);
  const { user } = useAuth();

  const isMyAd = data.user_id === user?.id;

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
      await productService.updateProductStatus(adId, !data.is_active);
      Toast.show({
        title: "Anúncio atualizado",
        placement: "top",
        bgColor: "blue.300",
      });
      fetchAd();
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

  const enterInChat = () => {
    Linking.openURL(`https://wa.me/+55${data.user.tel}`);
  };

  useEffect(() => {
    fetchAd();
  }, []);

  return (
    <AdLayout
      enterInChat={enterInChat}
      goBack={goBack}
      data={data}
      loading={loadingData === loadingStatesEnum.PENDING}
      deleteAd={deleteAd}
      disableAd={disableAd}
      isMyAd={isMyAd}
    />
  );
};
