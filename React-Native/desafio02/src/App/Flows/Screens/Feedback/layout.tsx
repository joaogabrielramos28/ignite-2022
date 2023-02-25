import React from "react";
import {
  ButtonContainer,
  Container,
  Image,
  Strong,
  SubTitle,
  Title,
} from "./styles";

import Success from "../../assets/success.png";
import Error from "../../assets/error.png";
import { Button } from "../../components/Button";

type FeedbackLayoutProps = {
  isHealthy: boolean;
  goToStart: () => void;
};

export function FeedbackLayout({ isHealthy, goToStart }: FeedbackLayoutProps) {
  const title = isHealthy ? "Continue assim!" : "Que pena!";
  const subTitle = isHealthy ? (
    <SubTitle>
      Você continua <Strong>dentro da dieta.</Strong> Muito bem!
    </SubTitle>
  ) : (
    <SubTitle>
      Você <Strong>saiu da dieta </Strong> dessa vez, mas continue se esforçando
      e não desista!
    </SubTitle>
  );

  const image = isHealthy ? Success : Error;

  return (
    <Container>
      <Title isHealthy={isHealthy}>{title}</Title>
      {subTitle}
      <Image source={image} />
      <ButtonContainer>
        <Button title="Ir para a página inicial" onPress={goToStart} />
      </ButtonContainer>
    </Container>
  );
}
