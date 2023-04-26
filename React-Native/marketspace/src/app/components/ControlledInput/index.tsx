import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import { IconButton, IInputProps, Text, useTheme } from "native-base";
import { Eye, EyeClosed } from "phosphor-react-native";
import { Input } from "@components/Input";

type ControlledInputProps = IInputProps & {
  name: string;
  control?: Control<any>;
  passwordType?: boolean;
  error?: boolean;
  errorMessage?: string;
};

export const ControlledInput = ({
  name,
  control,
  passwordType = false,
  error,
  errorMessage,
  ...rest
}: ControlledInputProps) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prevState) => !prevState);

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            type={passwordType ? (showPassword ? "text" : "password") : "text"}
            value={value}
            onChangeText={onChange}
            rightElement={
              passwordType ? (
                <IconButton
                  onPress={togglePassword}
                  icon={
                    showPassword ? (
                      <Eye size={24} color={colors.gray[500]} />
                    ) : (
                      <EyeClosed size={24} color={colors.gray[500]} />
                    )
                  }
                />
              ) : undefined
            }
            {...rest}
          />
        )}
      />
      {error && errorMessage ? (
        <Text color={"red.300"} mt={2} fontSize={"sm"}>
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};
