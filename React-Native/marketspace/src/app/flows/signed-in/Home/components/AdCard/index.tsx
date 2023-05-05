import React from "react";
import { api } from "@infra/http/api";
import { IProduct } from "@model/Product";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "@routes/screens";
import { formattedMoney } from "@utils/formatMoney";
import {
  Avatar,
  Badge,
  Box,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type Props = {
  data: IProduct;
};

export const AdCard = ({ data }: Props) => {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  const { is_new } = data;
  const badgeColor = is_new ? "blue.600" : "gray.700";
  const badgeText = is_new ? "NOVO" : "USADO";

  const handleGoToAd = () => {
    navigate(Screens.MY_AD, { adId: data.id });
  };

  return (
    <Pressable onPress={handleGoToAd}>
      <Box width={40} position={"relative"} marginTop={4}>
        <Image
          w={"100%"}
          height={32}
          source={{
            uri: `${api.defaults.baseURL}/images/${data.product_images[0]?.path}`,
          }}
          alt=""
          borderRadius="6px"
        />
        <HStack
          position="absolute"
          justifyContent="space-between"
          width={"100%"}
          padding={1}
        >
          <Avatar
            w={6}
            h={6}
            borderWidth={1}
            borderColor={"gray.700"}
            source={{
              uri: `${api.defaults.baseURL}/images/${data.user.avatar}`,
            }}
          />
          <Badge
            _text={{
              color: "gray.700",
              fontWeight: "bold",
              fontFamily: "heading",
            }}
            rounded={"full"}
            bg={badgeColor}
          >
            {badgeText}
          </Badge>
        </HStack>
        <VStack mt={1}>
          <Text fontSize="sm" color="gray.200">
            {data.name}
          </Text>
          <HStack alignItems="center" space={1}>
            <Text fontSize="xs" fontFamily="heading" color="gray.100">
              R$
            </Text>
            <Text fontSize="md" fontFamily="heading" color="gray.100">
              {formattedMoney(data.price)}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Pressable>
  );
};
