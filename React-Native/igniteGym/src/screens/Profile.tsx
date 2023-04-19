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
import { TouchableOpacity } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "@hooks/useAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
};

const profileSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  password: yup
    .string()
    .min(6, "No mínimo 6 caracteres")
    .nullable()
    .transform((value) => (!!value ? value : null)),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref("password"), undefined],
      "A confirmação de senha não conferem"
    )
    .nullable()
    .transform((value) => (!!value ? value : null))
    .when("password", {
      is: (Field: any) => Field,
      then: (schema) =>
        schema
          .nullable()
          .required("Informe a confirmação da senha")
          .transform((value) => (!!value ? value : null)),
    }),
});

export const Profile = () => {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string>(
    "https://avatars.githubusercontent.com/u/5466341?v=4"
  );
  const [isUpdating, setIsUpdating] = useState(false);
  const PHOTO_SIZE = 33;

  const { user, updateUserProfile } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
    resolver: yupResolver(profileSchema),
  });

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

  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsUpdating(true);

      const userUpdated = user!;

      userUpdated.name = data.name;

      await api.put("/users", data);

      updateUserProfile(userUpdated);
      toast.show({
        title: "Perfil atualizado com sucesso",
        placement: "top",
        bgColor: "green.500",
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Erro ao atualizar perfil";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsUpdating(false);
    }
  }

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

            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Nome"
                  bg="gray.600"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="E-mail"
                  bg="gray.600"
                  isDisabled
                  value={value}
                  onChangeText={onChange}
                />
              )}
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
            <Controller
              control={control}
              name="old_password"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Senha antiga"
                  bg="gray.600"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Nova senha"
                  bg="gray.600"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="confirm_password"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Confirme a nova senha"
                  bg="gray.600"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.confirm_password?.message}
                />
              )}
            />

            <Button
              title="Atualizar"
              mt={4}
              onPress={handleSubmit(handleProfileUpdate)}
            />
          </Center>
        </ScrollView>
      </VStack>
    </KeyboardAvoidingView>
  );
};
