import { Center, Heading, Image, Text, VStack } from "native-base";
import React from "react";
import Logo from "@assets/logo.png";
import { Form } from "./components/Form";
import { Button } from "@components/Button";

export const LoginLayout = () => {
  return (
    <Center flex={1} bg={"gray.700"}>
      <Image source={Logo} alt="" />

      <Heading color="gray.100" fontFamily={"heading"}>
        marketspace
      </Heading>
      <Text color="gray.300" fontSize={"sm"}>
        Seu espaço de compra e venda
      </Text>

      <Form />
    </Center>
  );
};
