import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Text, VStack } from "native-base";
import React from "react";

export const Form = () => {
  return (
    <VStack marginTop={16} width="100%" paddingX={12}>
      <VStack>
        <VStack space={4}>
          <Text color="gray.200" fontSize="sm" textAlign="center">
            Acesse sua conta
          </Text>

          <Input placeholder="E-mail" />
          <Input placeholder="Senha" isPassword />
        </VStack>
        <Button title="Entrar" marginTop={"8"} />
      </VStack>

      <VStack marginTop={16} space={4}>
        <Text color="gray.200" fontSize={"sm"} textAlign="center">
          Ainda não tem acesso?
        </Text>
        <Button title="Criar uma conta" variant="light" />
      </VStack>
    </VStack>
  );
};
