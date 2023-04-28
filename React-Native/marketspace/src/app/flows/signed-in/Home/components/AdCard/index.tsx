import { IProduct } from "@model/Product";
import {
  Avatar,
  Badge,
  Box,
  FlatList,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import React from "react";

type Props = {
  data: IProduct;
};

export const AdCard = ({ data }: Props) => {
  const { is_new } = data;
  const badgeColor = is_new ? "blue.600" : "gray.700";
  const badgeText = is_new ? "NOVO" : "USADO";
  return (
    <Box width={40} position={"relative"}>
      <Image
        w={"100%"}
        height={32}
        source={{
          uri: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
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
        <Avatar w={6} h={6} borderWidth={1} borderColor={"gray.700"} />
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
            {(data.price / 100).toFixed(2)}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};
