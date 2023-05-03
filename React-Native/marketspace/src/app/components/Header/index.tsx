import React from "react";
import {
  Box,
  Center,
  HStack,
  Heading,
  IconButton,
  Text,
  useTheme,
} from "native-base";
import { ArrowLeft } from "phosphor-react-native";

type Props = {
  title: string;
  onBack: () => void;
};

export const Header = ({ title, onBack }: Props) => {
  const { colors } = useTheme();
  return (
    <HStack alignItems="center">
      <IconButton
        _pressed={{
          background: "gray.500",
        }}
        onPress={onBack}
        icon={<ArrowLeft size={24} color={colors.gray[100]} />}
      />

      <Center flex={1}>
        <Heading color="gray.100" fontSize="lg" fontFamily="heading">
          {title}
        </Heading>
      </Center>
    </HStack>
  );
};
