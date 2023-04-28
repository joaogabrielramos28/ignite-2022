import React, { useEffect, useState } from "react";
import { Button } from "@components/Button";
import { Avatar, HStack, Heading, Text, VStack, useTheme } from "native-base";
import { Plus } from "phosphor-react-native";
import { IUser } from "@model/User";
import { api } from "@infra/http/api";
import { Loading } from "@components/Loading";
import { MyAdsCard } from "./components/MyAdsCard";
import { SearchInput } from "./components/SearchInput";
import { useProducts } from "@hooks/network/useProducts";
import { AdCard } from "./components/AdCard";

type Props = {
  user: IUser | null;
};

export const HomeLayout = ({ user }: Props) => {
  const { colors } = useTheme();
  const [products, setProducts] = useState([]);
  const { getProducts } = useProducts();

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      setProducts(response);
    }
    loadProducts();
  }, []);

  if (!user) {
    <Loading />;
  }

  console.log(getProducts());

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
          title="Criar anúncio"
          variant="secondary"
          startIcon={<Plus size={16} color={colors.gray[600]} />}
        />
      </HStack>

      <VStack marginTop={8}>
        <Text fontSize={"sm"} color={"gray.300"}>
          Seus produtos anunciados para venda
        </Text>

        <MyAdsCard count={4} onPress={() => {}} />

        <VStack mt={8}>
          <Text fontSize={"sm"} color={"gray.300"}>
            Compre produtos variados
          </Text>

          <SearchInput />
          <AdCard
            data={{
              accept_trade: true,
              description: "Produto em ótimo estado",
              is_new: true,
              name: "Produto",
              payment_methods: [""],
              price: 100,
            }}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};
