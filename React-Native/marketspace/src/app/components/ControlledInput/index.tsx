import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import { IconButton, IInputProps, Text, useTheme } from "native-base";
import { Eye, EyeClosed } from "phosphor-react-native";
import { Input } from "@components/Input";
import MaskInput, { Mask } from "react-native-mask-input";

type ControlledInputProps = IInputProps & {
  name: string;
  control?: Control<any>;
  passwordType?: boolean;
  error?: boolean;
  errorMessage?: string;
  isMasked?: boolean;
  sendUnmaskedValue?: boolean;
  mask?: Mask;
};

export const ControlledInput = ({
  name,
  control,
  passwordType = false,
  error,
  errorMessage,
  isMasked = false,
  sendUnmaskedValue = false,
  mask,
  ...rest
}: ControlledInputProps) => {
  const { colors, fontSizes, fonts } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prevState) => !prevState);

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            {isMasked ? (
              <MaskInput
                placeholder={rest.placeholder}
                placeholderTextColor={colors.gray[400]}
                value={value}
                onChangeText={(masked, unmasked) =>
                  onChange(sendUnmaskedValue ? unmasked : masked)
                }
                mask={mask}
                style={{
                  backgroundColor: colors.gray[700],
                  padding: 12,
                  borderRadius: 6,
                  fontSize: fontSizes.md,
                  fontFamily: fonts.body,
                }}
              />
            ) : (
              <Input
                type={
                  passwordType ? (showPassword ? "text" : "password") : "text"
                }
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
          </>
        )}
      />
      {error && errorMessage ? (
        <Text color={"red.300"} mt={2} fontSize={"xs"}>
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};
