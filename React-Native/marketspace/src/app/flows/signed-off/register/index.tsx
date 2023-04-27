import React, { useState } from "react";
import { RegisterLayout } from "./layout";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Toast, useToast } from "native-base";
import { loadingStates, loadingStatesEnum } from "@ts/types/loading";
import { AppError } from "@infra/http/AppError";
import { useAuth } from "@hooks/network/useAuth";
export type FormData = {
  avatar: string;
  name: string;
  email: string;
  tel: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const { register } = useAuth();
  const toast = useToast();
  const [avatar, setAvatar] = useState("");
  const [loadingImage, setLoadingImage] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );

  const handleRegister = async (data: FormData) => {
    try {
      const { password, email, name, tel } = data;

      const photoInfo = await FileSystem.getInfoAsync(avatar);

      const fileExtension = photoInfo.uri.split(".").pop();
      const photoFile = {
        name: `${Date.now()}.${fileExtension}`,
        type: `image/${fileExtension}`,
        uri: avatar,
      } as any;

      const userPhotoUploadForm = new FormData();

      userPhotoUploadForm.append("avatar", photoFile);
      userPhotoUploadForm.append("name", name);
      userPhotoUploadForm.append("password", password);
      userPhotoUploadForm.append("tel", tel);
      userPhotoUploadForm.append("email", email);

      await register(userPhotoUploadForm);

      toast.show({
        title: "Cadastro realizado com sucesso",
        placement: "top",
        bgColor: "blue.300",
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Erro ao realizar login";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.300",
      });
    }
  };

  const handleAddAvatar = async () => {
    try {
      setLoadingImage(loadingStatesEnum.PENDING);
      const selectedImage = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (selectedImage.canceled) return;

      if (selectedImage.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          selectedImage.assets[0].uri
        );

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          Toast.show({
            title: "Escolha uma imagem até 5MB",
            placement: "top",
            bgColor: "red.300",
          });
          setLoadingImage(loadingStatesEnum.DONE);

          return;
        }

        setAvatar(selectedImage.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingImage(loadingStatesEnum.DONE);
    }
  };

  return (
    <RegisterLayout
      handleAddAvatar={handleAddAvatar}
      avatar={avatar}
      loadingImage={loadingImage === loadingStatesEnum.PENDING}
      handleRegister={handleRegister}
    />
  );
};
