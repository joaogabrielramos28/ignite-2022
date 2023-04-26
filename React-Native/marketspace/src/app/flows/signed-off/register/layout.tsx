import { Center, Heading, Image, Text } from "native-base";
import React from "react";
import Logo from "@assets/logo.png";
import { Form } from "./Form";

export const RegisterLayout = () => {
  return (
    <Center flex={1} bg={"gray.700"} paddingX={12}>
      <Image source={Logo} alt="" width={15} height={10} />

      <Heading
        color="gray.100"
        fontFamily={"heading"}
        fontSize={"lg"}
        marginTop={4}
      >
        Boas vindas!
      </Heading>
      <Text color="gray.200" fontSize={"sm"} textAlign="center" mt={4}>
        Crie sua conta e use o espaço para comprar itens variados e vender seus
        produtos
      </Text>

      <Form />
    </Center>
  );
};
