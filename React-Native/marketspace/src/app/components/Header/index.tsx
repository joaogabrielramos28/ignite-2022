import React, { ReactNode } from "react";
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
  onBack?: () => void;
  customIcon?: JSX.Element;
  onCustomIconPress?: () => void;
};

export const Header = ({
  title,
  onBack,
  customIcon,
  onCustomIconPress,
}: Props) => {
  const { colors } = useTheme();
  return (
    <HStack alignItems="center" justifyContent="space-between">
      {onBack ? (
        <IconButton
          _pressed={{
            background: "gray.500",
          }}
          onPress={onBack}
          icon={<ArrowLeft size={24} color={colors.gray[100]} />}
        />
      ) : null}

      <Center flex={1}>
        <Heading color="gray.100" fontSize="lg" fontFamily="heading">
          {title}
        </Heading>
      </Center>

      {!!customIcon && onCustomIconPress ? (
        <IconButton
          size={"xs"}
          _pressed={{
            background: "gray.500",
          }}
          icon={customIcon}
          onPress={onCustomIconPress}
        />
      ) : null}
    </HStack>
  );
};
