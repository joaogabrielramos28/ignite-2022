import { Center, HStack, Image, Text, VStack, useTheme } from "native-base";
import React from "react";
import AvatarPlaceholder from "@assets/avatar.png";
import { Button } from "@components/Button";
import { PencilSimpleLine } from "phosphor-react-native";
import { Input } from "@components/Input";

export const Form = () => {
  const { colors } = useTheme();
  return (
    <VStack mt={8} space={4} width={"100%"} alignItems={"center"}>
      <HStack alignItems={"flex-end"}>
        <Image source={AvatarPlaceholder} width={20} height={20} alt="" />

        <Button
          position={"absolute"}
          right={-10}
          height={10}
          width={10}
          title=""
          rounded={"full"}
          startIcon={<PencilSimpleLine size={20} color={colors.gray[600]} />}
        />
      </HStack>

      <VStack w={"100%"} space={4}>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Telefone" />
        <Input placeholder="Senha" isPassword />
        <Input placeholder="Confirmar senha" isPassword />

        <Button title="Criar" variant="secondary" />
      </VStack>

      <VStack marginTop={16} space={4} width={"100%"}>
        <Text color="gray.200" fontSize={"sm"} textAlign="center">
          Já tem uma conta?
        </Text>
        <Button title="Ir para o login" variant="light" />
      </VStack>
    </VStack>
  );
};
