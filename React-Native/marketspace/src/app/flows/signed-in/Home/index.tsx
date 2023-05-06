import React, { useEffect, useState } from "react";
import { HomeLayout } from "./layout";
import { useAuth } from "@hooks/network/useAuth";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "@routes/screens";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { AppError } from "@infra/http/AppError";
import { Toast } from "native-base";
import { ProductService } from "@infra/products";
import { IProduct } from "@model/Product";
import { loadingStates, loadingStatesEnum } from "@ts/types/loading";

export const Home = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  const productService = new ProductService();
  const [ads, setAds] = useState<IProduct[]>([]);
  const [myAdsCount, setMyAdsCount] = useState<number>(0);
  const [loading, setLoading] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );

  const handleGoToCreateAd = () => {
    navigate(Screens.CREATED_AD);
  };

  const getAds = async () => {
    try {
      setLoading(loadingStatesEnum.PENDING);
      const response = await productService.getProducts();
      setAds(response);
      await getMyAds();
      setLoading(loadingStatesEnum.DONE);
    } catch (err) {
      const isAppError = err instanceof AppError;
      const title = isAppError ? err.message : "Erro ao carregar anúncios";
      Toast.show({
        title,
        placement: "top",
        bgColor: "red.300",
      });
    }
  };

  const getMyAds = async () => {
    try {
      setLoading(loadingStatesEnum.PENDING);
      const response = await productService.getProductsByUser();
      setMyAdsCount(response.length);

      setLoading(loadingStatesEnum.DONE);
    } catch (err) {
      const isAppError = err instanceof AppError;
      const title = isAppError ? err.message : "Erro ao carregar anúncios";
      Toast.show({
        title,
        placement: "top",
        bgColor: "red.300",
      });
    }
  };

  const handleNavigateToMyAds = () => {
    navigate(Screens.MY_ADS);
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <HomeLayout
      handleNavigateToMyAds={handleNavigateToMyAds}
      user={user}
      handleGoToCreateAd={handleGoToCreateAd}
      ads={ads}
      loading={loading == loadingStatesEnum.PENDING}
      myAdsCount={myAdsCount}
    />
  );
};
