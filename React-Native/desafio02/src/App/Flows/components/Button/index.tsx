import React from "react";
import { Text, Container } from "./styles";

type ButtonProps = {
  onPress: () => void;
  icon?: React.ReactNode;
  title: string;
};

export function Button({ onPress, title, icon }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      {icon}
      <Text>{title}</Text>
    </Container>
  );
}
