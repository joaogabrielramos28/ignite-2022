import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {
  Center,
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export const Profile = () => {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const PHOTO_SIZE = 33;
  return (
    <KeyboardAvoidingView behavior="padding" flex={1}>
      <VStack flex={1}>
        <ScreenHeader title="Perfil" />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 36,
          }}
        >
          <Center mt={6} px={10}>
            {!photoIsLoading ? (
              <UserPhoto
                source={{
                  uri: "https://avatars.githubusercontent.com/u/5466341?v=4",
                }}
                alt="Foto do usuário"
                size={PHOTO_SIZE}
              />
            ) : (
              <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
              />
            )}
            <TouchableOpacity>
              <Text
                color="green.500"
                fontWeight="bold"
                fontSize="md"
                mt={2}
                mb={8}
              >
                Alterar foto
              </Text>
            </TouchableOpacity>

            <Input placeholder="Nome" bg="gray.600" />
            <Input
              placeholder="E-mail"
              value="E-mail@gmail.com"
              bg="gray.600"
              isDisabled
            />

            <Heading
              color="gray.200"
              fontSize="md"
              mb={2}
              alignSelf="flex-start"
              mt={12}
            >
              Alterar senha
            </Heading>

            <Input placeholder="Senha antiga" bg="gray.600" secureTextEntry />
            <Input placeholder="Nova senha" bg="gray.600" secureTextEntry />
            <Input
              placeholder="Confirme a nova senha"
              bg="gray.600"
              secureTextEntry
            />

            <Button title="Atualizar" mt={4} />
          </Center>
        </ScrollView>
      </VStack>
    </KeyboardAvoidingView>
  );
};
