import React from "react";
import { CreateAdLayout } from "./layout";
import { useNavigation } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Toast } from "native-base";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Screens } from "@routes/screens";

export type FormData = {
  title: string;
  description: string;
  type: string;
  price: string;
  acceptExchange: boolean;
  paymentMethods: string[];
};

export const CreateAd = () => {
  const { goBack, navigate } = useNavigation<AppNavigatorRoutesProps>();
  const [images, setImages] = React.useState<string[]>([]);
  const [loadingImage, setLoadingImage] = React.useState(false);

  const handleAddImages = async () => {
    setLoadingImage(true);
    try {
      const selectedImage = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
        orderedSelection: true,
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

          return;
        }
        setImages((prev) => [...prev, selectedImage.assets[0].uri]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingImage(false);
    }
  };

  const handleRemoveImage = (image: string) => {
    const newImages = images.filter((img) => img !== image);
    setImages(newImages);
  };

  const handleGoToPreview = async (data: FormData) => {
    navigate(Screens.PREVIEW_AD, {
      data: {
        ...data,
        images,
      },
    });
  };
  return (
    <CreateAdLayout
      goBack={goBack}
      handleAddImages={handleAddImages}
      images={images}
      handleRemoveImage={handleRemoveImage}
      loadingImage={loadingImage}
      handleGoToPreview={handleGoToPreview}
    />
  );
};
