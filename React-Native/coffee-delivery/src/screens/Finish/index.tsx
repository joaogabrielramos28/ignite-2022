import React from "react";
import { Button, ButtonText, Container, Description, Title } from "./styles";
import { Image } from "react-native";

import FinishImage from "../../assets/finish.png";

export function Finish() {
  return (
    <Container>
      <Image source={FinishImage} />

      <Title>Uhu! Pedido confirmado</Title>
      <Description>
        Agora é só aguardar que logo o café chegará até você!
      </Description>

      <Button>
        <ButtonText>Ir para a home</ButtonText>
      </Button>
    </Container>
  );
}
