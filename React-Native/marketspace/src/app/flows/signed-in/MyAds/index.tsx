import React, { useState } from "react";
import { MyAdsLayout } from "./layout";
import { IProduct } from "@model/Product";
import { AppError } from "@infra/http/AppError";
import { Toast } from "native-base";
import { ProductService } from "@infra/products";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { loadingStates, loadingStatesEnum } from "@ts/types/loading";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Screens } from "@routes/screens";

export type FilterMyAds = "all" | "active" | "inactive";

export const MyAds = () => {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  const [myAds, setMyAds] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );
  const [filter, setFilter] = useState<FilterMyAds>("all");

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

  const handleChangeFilter = async (filter: FilterMyAds) => {
    setFilter(filter);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchMyAds();
    }, [])
  );

  const filteredMyAds = myAds.filter((ad) => {
    if (filter === "all") return true;
    if (filter === "active") return ad.is_active === true;
    if (filter === "inactive") return ad.is_active === false;
  });

  const handleGoToCreateAd = () => {
    navigate(Screens.CREATED_AD);
  };

  return (
    <MyAdsLayout
      filter={filter}
      handleChangeFilter={handleChangeFilter}
      loading={loading === loadingStatesEnum.PENDING}
      myAds={filteredMyAds}
      handleGoToCreateAd={handleGoToCreateAd}
    />
  );
};
