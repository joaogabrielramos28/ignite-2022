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

export const Home = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  const productService = new ProductService();
  const [ads, setAds] = useState<IProduct[]>([]);

  const handleGoToCreateAd = () => {
    navigate(Screens.CREATED_AD);
  };

  const getAds = async () => {
    try {
      const response = await productService.getProducts();
      setAds(response);
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
    getAds();
  }, []);
  return (
    <HomeLayout user={user} handleGoToCreateAd={handleGoToCreateAd} ads={ads} />
  );
};
