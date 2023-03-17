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
  useToast,
  VStack,
} from "native-base";
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
export const Profile = () => {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string>(
    "https://avatars.githubusercontent.com/u/5466341?v=4"
  );
  const PHOTO_SIZE = 33;

  const toast = useToast();

  const handleUserPhotoSelect = async () => {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          toast.show({
            title: "A imagem deve ser menor que 5MB",
            placement: "top",
            bgColor: "red.500",
          });
          return;
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  };

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
                  uri: userPhoto,
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
            <TouchableOpacity onPress={handleUserPhotoSelect}>
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
              fontFamily="heading"
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
