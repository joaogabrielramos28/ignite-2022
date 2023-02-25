import React from "react";
import { Container, SubTitle, Title } from "./styles";

type CardProps = {
  background: "error" | "success" | "default";
  title: string;
  subtitle: string;
  hasMarginLeft?: boolean;
};

export function Card({
  title,
  background,
  subtitle,
  hasMarginLeft = false,
}: CardProps) {
  return (
    <Container background={background} hasMarginLeft={hasMarginLeft}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
