import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export const SignUp = () => {
  return (
    <ScrollView
      bg={"gray.700"}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg={"gray.700"} px={10}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position={"absolute"}
        />

        <Center my={24}>
          <LogoSvg />

          <Text color={"gray.100"} fontSize={"sm"}>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color={"gray.100"} mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Nome" />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e Acessar" />
        </Center>
        <Button mt={24} title="Voltar para o login" variant={"outline"} />
      </VStack>
    </ScrollView>
  );
};
