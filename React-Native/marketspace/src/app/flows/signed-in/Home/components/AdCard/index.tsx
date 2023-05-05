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
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type Props = {
  data: IProduct;
  hasAvatar?: boolean;
  isInactive?: boolean;
};

export const AdCard = ({
  data,
  hasAvatar = true,
  isInactive = false,
}: Props) => {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  const { is_new } = data;
  const badgeColor = is_new ? "blue.600" : "gray.200";
  const badgeText = is_new ? "NOVO" : "USADO";

  const handleGoToAd = () => {
    navigate(Screens.AD, { adId: data.id });
  };

  return (
    <Pressable onPress={handleGoToAd}>
      <Box width={40} position={"relative"} marginTop={4}>
        {isInactive ? (
          <View
            background={"gray.100"}
            top={0}
            width={40}
            height={32}
            left={0}
            position={"absolute"}
            opacity={0.6}
            zIndex={9999}
          >
            <Center flex={1} justifyContent="flex-end">
              <Text
                color={"gray.700"}
                fontSize={"sm"}
                fontFamily={"heading"}
                textTransform="uppercase"
                marginBottom={2}
              >
                Anúncio desativado
              </Text>
            </Center>
          </View>
        ) : null}

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
          {hasAvatar ? (
            <Avatar
              w={6}
              h={6}
              borderWidth={1}
              borderColor={"gray.700"}
              source={{
                uri: `${api.defaults.baseURL}/images/${data.user.avatar}`,
              }}
            />
          ) : null}
          <Box flex={1} width={"100%"}>
            <Badge
              _text={{
                color: "gray.700",
                fontWeight: "bold",
                fontFamily: "heading",
              }}
              rounded={"full"}
              bg={badgeColor}
              alignSelf="flex-end"
            >
              {badgeText}
            </Badge>
          </Box>
        </HStack>
        <VStack mt={1}>
          <Text fontSize="sm" color={!isInactive ? "gray.200" : "gray.400"}>
            {data.name}
          </Text>
          <HStack alignItems="center" space={1}>
            <Text
              fontSize="xs"
              fontFamily="heading"
              color={!isInactive ? "gray.100" : "gray.400"}
            >
              R$
            </Text>
            <Text
              fontSize="md"
              fontFamily="heading"
              color={!isInactive ? "gray.100" : "gray.400"}
            >
              {formattedMoney(data.price)}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Pressable>
  );
};
