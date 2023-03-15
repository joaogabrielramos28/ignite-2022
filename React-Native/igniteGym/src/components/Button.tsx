import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";
import React from "react";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export const Button = ({ title, variant = "solid", ...rest }: Props) => {
  return (
    <NativeBaseButton
      w={"full"}
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"green.500"}
      rounded={"sm"}
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily={"body"}
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
};