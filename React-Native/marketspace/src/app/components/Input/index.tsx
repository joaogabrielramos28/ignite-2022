import React, { useState } from "react";
import {
  IInputProps,
  IconButton,
  Input as NativeBaseInput,
  useTheme,
} from "native-base";
import { EyeClosed, Eye } from "phosphor-react-native";

type Props = IInputProps;

export const Input = ({ ...rest }: Props) => {
  const { colors } = useTheme();

  return (
    <NativeBaseInput
      padding={3}
      isFullWidth
      bgColor="gray.700"
      placeholderTextColor="gray.400"
      _input={{
        fontSize: "md",
      }}
      borderWidth={0}
      fontSize={"xs"}
      {...rest}
    />
  );
};
