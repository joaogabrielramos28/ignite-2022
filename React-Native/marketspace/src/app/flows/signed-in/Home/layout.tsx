import React from "react";
import { Button } from "@components/Button";
import { Avatar, HStack, Heading, Text, VStack, useTheme } from "native-base";
import { Plus } from "phosphor-react-native";

export const HomeLayout = () => {
  const { colors } = useTheme();
  return (
    <VStack padding={6} safeAreaY space={3} flex={1}>
      <HStack w="100%" justifyContent={"space-between"}>
        <HStack space={3}>
          <Avatar borderWidth={3} borderColor={"blue.300"} />
          <VStack>
            <Text fontSize={"md"}>Boas vindas,</Text>
            <Heading fontSize={"md"} fontFamily={"heading"}>
              Maria!
            </Heading>
          </VStack>
        </HStack>
        <Button
          title="Criar anúncio"
          variant="secondary"
          startIcon={<Plus size={16} color={colors.gray[600]} />}
        />
      </HStack>
    </VStack>
  );
};
