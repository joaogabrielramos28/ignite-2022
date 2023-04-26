import React, { useState } from "react";
import {
  IInputProps,
  IconButton,
  Input as NativeBaseInput,
  useTheme,
} from "native-base";
import { EyeClosed, Eye } from "phosphor-react-native";

type Props = IInputProps & {
  isPassword?: boolean;
};

export const Input = ({ isPassword, ...rest }: Props) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const PasswordRightElement = () => (
    <IconButton
      size="xs"
      icon={
        !showPassword ? (
          <EyeClosed size={24} color={colors.gray[300]} />
        ) : (
          <Eye size={24} color={colors.gray[300]} />
        )
      }
      onPress={toggleShowPassword}
    />
  );

  return (
    <NativeBaseInput
      padding={3}
      isFullWidth
      bgColor="gray.700"
      placeholderTextColor="gray.400"
      rightElement={isPassword ? <PasswordRightElement /> : undefined}
      secureTextEntry={!showPassword}
      {...rest}
    />
  );
};
