import React, { useCallback, useEffect, useState } from "react";
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
import { useDebounce } from "@hooks/presentation/useDebounce";
import { GetProductRequestDTO } from "@infra/products/dtos/request/GetProductRequestDTO";

export type FilterStateType = {
  condition?: "new" | "used";
  acceptExchange: boolean;
  paymentMethods: string[];
};

export const Home = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  const productService = new ProductService();
  const [ads, setAds] = useState<IProduct[]>([]);
  const [myAdsCount, setMyAdsCount] = useState<number>(0);
  const [loading, setLoading] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );
  const [search, setSearch] = useState<string>("");
  const [isOpenFilterActionSheet, setIsOpenFilterActionSheet] =
    useState<boolean>(false);

  const [filterState, setFilterState] = useState<FilterStateType>(
    {} as FilterStateType
  );

  const handleChangeFilter = (filter: Partial<FilterStateType>) => {
    setFilterState((prev) => {
      return {
        ...prev,
        ...filter,
      };
    });
  };

  const toggleFilterActionSheet = () => {
    setIsOpenFilterActionSheet((prev) => !prev);
  };

  const handleGoToCreateAd = () => {
    navigate(Screens.CREATED_AD);
  };
  const searchDebounce = useDebounce(search, 500);

  const getAds = async ({
    accept_trade,
    is_new,
    payment_method,
  }: GetProductRequestDTO) => {
    try {
      setLoading(loadingStatesEnum.PENDING);
      const response = await productService.getProducts({
        query: searchDebounce,
        accept_trade,
        is_new,
        payment_method,
      });
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

  const handleSearch = async (search: string) => {
    setSearch(search);
  };

  const applyFilter = () => {};

  const handleOpenFilterActionSheet = () => {};

  useEffect(() => {
    getAds({});
  }, [searchDebounce]);
  return (
    <HomeLayout
      handleNavigateToMyAds={handleNavigateToMyAds}
      user={user}
      handleGoToCreateAd={handleGoToCreateAd}
      ads={ads}
      loading={loading == loadingStatesEnum.PENDING}
      myAdsCount={myAdsCount}
      handleSearch={handleSearch}
      search={search}
      toggleFilterActionSheet={toggleFilterActionSheet}
      isOpenFilterActionSheet={isOpenFilterActionSheet}
      handleChangeFilter={handleChangeFilter}
      filterState={filterState}
    />
  );
};
