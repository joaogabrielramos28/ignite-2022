import React from "react";
import { Text, Container } from "./styles";

type ButtonProps = {
  onPress: () => void;
  icon?: React.ReactNode;
  title: string;
  secondary?: boolean;
};

export function Button({
  onPress,
  title,
  icon,
  secondary = false,
}: ButtonProps) {
  return (
    <Container onPress={onPress} secondary={secondary}>
      {icon}
      <Text secondary={secondary}>{title}</Text>
    </Container>
  );
}
