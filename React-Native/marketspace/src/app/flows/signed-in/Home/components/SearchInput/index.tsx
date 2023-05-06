import { Input } from "@components/Input";
import { Box, HStack, useTheme } from "native-base";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";
import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ onChange, value }: Props) => {
  const { colors } = useTheme();
  return (
    <Input
      mt={4}
      padding={4}
      onChangeText={onChange}
      value={value}
      placeholder="Buscar anúncio"
      InputRightElement={
        <HStack marginRight={4}>
          <MagnifyingGlass size={20} weight="bold" color={colors.gray[200]} />
          <Box bg={"gray.400"} width={0.3} mx={4} />
          <Sliders size={20} weight="bold" color={colors.gray[200]} />
        </HStack>
      }
    />
  );
};
