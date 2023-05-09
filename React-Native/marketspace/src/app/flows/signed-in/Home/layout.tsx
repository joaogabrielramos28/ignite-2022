import React, { useEffect, useState } from "react";
import { Button } from "@components/Button";
import {
  Avatar,
  Box,
  Center,
  FlatList,
  HStack,
  Heading,
  Skeleton,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { Plus } from "phosphor-react-native";
import { IUser } from "@model/User";
import { api } from "@infra/http/api";
import { Loading } from "@components/Loading";
import { MyAdsCard } from "./components/MyAdsCard";
import { SearchInput } from "./components/SearchInput";

import { AdCard } from "./components/AdCard";
import { IProduct } from "@model/Product";
import { FilterSheet } from "./components/FilterSheet";
import { FilterStateType } from ".";

type Props = {
  user: IUser | null;
  ads: IProduct[];
  loading: boolean;
  myAdsCount: number;
  search: string;
  isOpenFilterActionSheet: boolean;
  filterState: FilterStateType;
  handleGoToCreateAd: () => void;
  handleNavigateToMyAds: () => void;
  handleSearch: (search: string) => void;
  toggleFilterActionSheet: () => void;
  handleChangeFilter: (filter: Partial<FilterStateType>) => void;
};

export const HomeLayout = ({
  user,
  handleGoToCreateAd,
  ads,
  loading,
  myAdsCount,
  handleNavigateToMyAds,
  handleSearch,
  search,
  isOpenFilterActionSheet,
  toggleFilterActionSheet,
  filterState,
  handleChangeFilter,
}: Props) => {
  const { colors } = useTheme();

  if (!user) {
    <Loading />;
  }

  const _renderItem = ({ item }: { item: IProduct }) => {
    return (
      <AdCard
        key={item.id}
        data={{
          ...item,
        }}
      />
    );
  };

  return (
    <VStack padding={6} safeAreaY space={3} flex={1}>
      <HStack w="100%" justifyContent={"space-between"}>
        <HStack space={3}>
          <Avatar
            borderWidth={3}
            borderColor={"blue.300"}
            source={{
              uri: `${api.defaults.baseURL}/images/${user?.avatar}`,
            }}
          />
          <VStack>
            <Text fontSize={"md"}>Boas vindas,</Text>
            <Heading fontSize={"md"} fontFamily={"heading"}>
              {user?.name}!
            </Heading>
          </VStack>
        </HStack>
        <Button
          onPress={handleGoToCreateAd}
          title="Criar anúncio"
          variant="secondary"
          startIcon={<Plus size={16} color={colors.gray[600]} />}
        />
      </HStack>

      <VStack marginTop={8} flex={1}>
        <Text fontSize={"sm"} color={"gray.300"}>
          Seus produtos anunciados para venda
        </Text>

        {loading ? (
          <Skeleton
            startColor="gray.400"
            endColor="gray.700"
            height={16}
            borderRadius={"6px"}
          />
        ) : (
          <MyAdsCard count={myAdsCount} onPress={handleNavigateToMyAds} />
        )}

        <VStack mt={8}>
          <Text fontSize={"sm"} color={"gray.300"}>
            Compre produtos variados
          </Text>

          <SearchInput
            onChange={handleSearch}
            value={search}
            onPress={toggleFilterActionSheet}
          />
        </VStack>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            contentContainerStyle={{
              paddingBottom: 32,
              flexGrow: 1,
            }}
            numColumns={2}
            columnWrapperStyle={{
              gap: 16,
            }}
            marginTop={4}
            data={ads}
            renderItem={_renderItem}
            ListEmptyComponent={() => (
              <Center>
                <Heading color="gray.100" fontSize="lg" fontFamily="body">
                  Nenhum produto encontrado
                </Heading>
              </Center>
            )}
          />
        )}
      </VStack>
      <FilterSheet
        filterState={filterState}
        handleChangeFilter={handleChangeFilter}
        isOpen={isOpenFilterActionSheet}
        onClose={toggleFilterActionSheet}
      />
    </VStack>
  );
};
