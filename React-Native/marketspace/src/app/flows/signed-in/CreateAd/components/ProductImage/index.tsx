import { Box, Button, HStack, Image, Pressable, useTheme } from "native-base";
import { X } from "phosphor-react-native";
import React from "react";

type Props = {
  uri: string;
  onDelete: () => void;
};

export const ProductImage = ({ uri, onDelete }: Props) => {
  const { colors } = useTheme();
  return (
    <Box position={"relative"}>
      <Image
        source={{
          uri,
        }}
        width={"100px"}
        height={"100px"}
        alt=""
        borderRadius={"6px"}
      />
      <Box position="absolute" right={0} top={0} p={1}>
        <Pressable
          w={4}
          h={4}
          bg="gray.200"
          alignItems="center"
          justifyContent="center"
          onPress={onDelete}
          rounded={"full"}
          _pressed={{
            bg: "gray.500",
          }}
        >
          <X color={colors.gray[700]} size={12} />
        </Pressable>
      </Box>
    </Box>
  );
};
