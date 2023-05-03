import React from "react";
import { Center, Pressable, useTheme } from "native-base";
import { Plus } from "phosphor-react-native";

type Props = {
  onPress: () => void;
};

export const ImageAdd = ({ onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <Pressable
      width="100px"
      height="100px"
      borderRadius={"6px"}
      background={"gray.500"}
      onPress={onPress}
      _pressed={{
        background: "gray.500",
        opacity: 0.3,
      }}
    >
      <Center flex={1}>
        <Plus size={24} color={colors.gray[400]} />
      </Center>
    </Pressable>
  );
};
