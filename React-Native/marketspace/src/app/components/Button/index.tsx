import React from "react";
import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "primary" | "secondary" | "light" | "text";
  bold?: boolean;
};

export const Button = ({
  title,
  variant = "primary",
  bold = true,
  ...rest
}: Props) => {
  const colorsScheme = (variant: string) => {
    switch (variant) {
      case "primary":
        return { bg: "blue.300", text: "gray.700" };
      case "secondary":
        return { bg: "gray.100", text: "gray.700" };
      case "light":
        return { bg: "gray.500", text: "gray.200" };
      case "text":
        return { bg: "transparent", text: "gray.200" };
      default:
        return { bg: "blue.300", text: "gray.700" };
    }
  };
  const bgByVariant = colorsScheme(variant).bg;
  const textColorByVariant = colorsScheme(variant).text;
  return (
    <NativeBaseButton
      bg={bgByVariant}
      _pressed={{
        bg: "bg.400",
        opacity: 0.3,
      }}
      {...rest}
    >
      <Text
        fontFamily={bold ? "heading" : "body"}
        fontSize="sm"
        color={textColorByVariant}
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
};
