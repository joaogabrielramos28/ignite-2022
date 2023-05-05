import { Header } from "@components/Header";
import { IProduct } from "@model/Product";
import {
  Box,
  Center,
  ChevronDownIcon,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Select,
  Skeleton,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { CaretDown, Plus } from "phosphor-react-native";
import React from "react";
import { AdCard } from "../Home/components/AdCard";
import { Loading } from "@components/Loading";

type MyAdsLayoutProps = {
  loading: boolean;
  myAds: IProduct[];
};

export const MyAdsLayout = ({ loading, myAds }: MyAdsLayoutProps) => {
  const { colors } = useTheme();

  const _renderItem = ({ item }: { item: IProduct }) => {
    return (
      <AdCard data={item} hasAvatar={false} isInactive={!item.is_active} />
    );
  };

  return (
    <VStack flex={1} safeAreaY paddingX={6}>
      <HStack w="100%" justifyContent="space-around" alignItems="center">
        <Center w="100%">
          <Heading
            textAlign="center"
            fontSize="lg"
            color="gray.100"
            fontFamily="heading"
          >
            Meus anúncios
          </Heading>
        </Center>
        <IconButton
          size="sm"
          icon={<Plus color={colors.gray[100]} size={24} />}
          _pressed={{
            background: "gray.500",
          }}
        />
      </HStack>

      <HStack
        alignItems="center"
        marginTop={10}
        w="100%"
        justifyContent="space-between"
      >
        {loading ? (
          <HStack alignItems="center" space={2}>
            <Skeleton.Text
              width={8}
              lines={1}
              startColor={"gray.400"}
              endColor={"gray.700"}
            />
            <Text fontSize="sm" color="gray.200">
              anúncios
            </Text>
          </HStack>
        ) : (
          <Text fontSize="sm" color="gray.200">
            {myAds.length} {myAds.length > 1 ? "anúncios" : "anúncio"}
          </Text>
        )}

        <Select
          color="gray.100"
          dropdownIcon={<CaretDown size={16} />}
          minWidth="100"
          defaultValue="all"
          selectedValue="all"
        >
          <Select.Item label="Todos" value="all" />
        </Select>
      </HStack>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={myAds}
          renderItem={_renderItem}
          numColumns={2}
          columnWrapperStyle={{
            gap: 16,
          }}
        />
      )}
    </VStack>
  );
};
