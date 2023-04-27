import {
  Center,
  HStack,
  Heading,
  Image,
  Skeleton,
  Text,
  VStack,
  useTheme,
} from "native-base";
import React from "react";
import Logo from "@assets/logo.png";
import AvatarPlaceholder from "@assets/avatar.png";
import { Button } from "@components/Button";
import { PencilSimpleLine } from "phosphor-react-native";
import { ControlledInput } from "@components/ControlledInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchemaValidation } from "./components/Validation/schema";
import { FormData } from ".";
import { Masks } from "react-native-mask-input";

type Props = {
  handleAddAvatar: () => Promise<void>;
  handleRegister: (data: FormData) => Promise<void>;
  avatar: string;
  loadingImage: boolean;
};

const PHOTO_SIZE = 22;

export const RegisterLayout = ({
  handleAddAvatar,
  avatar,
  loadingImage,
  handleRegister,
}: Props) => {
  const { colors } = useTheme();
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(RegisterSchemaValidation),
    defaultValues: {
      avatar: "",
      name: "",
      email: "",
      tel: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await handleRegister(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center flex={1} paddingX={12}>
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

      <VStack mt={8} space={4} width={"100%"} alignItems={"center"}>
        <HStack alignItems={"flex-end"}>
          {loadingImage ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded={"full"}
              startColor={"gray.400"}
              endColor={"gray.700"}
              borderColor={"blue.300"}
              borderWidth={3}
            />
          ) : (
            <Image
              rounded={"full"}
              source={
                avatar
                  ? {
                      uri: avatar,
                    }
                  : AvatarPlaceholder
              }
              width={PHOTO_SIZE}
              height={PHOTO_SIZE}
              borderColor={"blue.300"}
              borderWidth={3}
              resizeMode="cover"
              alt=""
            />
          )}

          <Button
            onPress={handleAddAvatar}
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
          <ControlledInput
            control={control}
            name="name"
            placeholder="Nome"
            error={!!errors.name}
            errorMessage={errors.name?.message}
          />
          <ControlledInput
            control={control}
            autoCapitalize="none"
            name="email"
            placeholder="E-mail"
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />
          <ControlledInput
            control={control}
            name="tel"
            placeholder="Telefone"
            error={!!errors.tel}
            errorMessage={errors.tel?.message}
            isMasked
            mask={Masks.BRL_PHONE}
          />
          <ControlledInput
            control={control}
            name="password"
            placeholder="Senha"
            passwordType
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
          <ControlledInput
            control={control}
            name="confirmPassword"
            placeholder="Confirmar senha"
            passwordType
            error={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
          />

          <Button
            isLoading={isSubmitting}
            title="Criar"
            variant="secondary"
            onPress={handleSubmit(onSubmit)}
          />
        </VStack>

        <VStack marginTop={16} space={4} width={"100%"}>
          <Text color="gray.200" fontSize={"sm"} textAlign="center">
            Já tem uma conta?
          </Text>
          <Button title="Ir para o login" variant="light" />
        </VStack>
      </VStack>
    </Center>
  );
};
