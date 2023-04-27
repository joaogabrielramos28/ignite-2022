import { Center, Heading, Image, Text, VStack, useToast } from "native-base";
import React from "react";
import Logo from "@assets/logo.png";
import { ControlledInput } from "@components/ControlledInput";
import { Button } from "@components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchemaValidation } from "./components/Validation/schema";
import { LoginRequestDTO } from "@infra/auth/dtos/requests/LoginRequestDTO";
import { AppError } from "@infra/http/AppError";

export type FormData = {
  email: string;
  password: string;
};

type Props = {
  handleLogin: ({ email, password }: LoginRequestDTO) => Promise<void>;
};

export const LoginLayout = ({ handleLogin }: Props) => {
  const toast = useToast();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: yupResolver(LoginSchemaValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await handleLogin(data);

      // toast.show({
      //   title: "Login realizado com sucesso",
      //   placement: "top",
      //   bgColor: "blue.300",
      // });
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
  return (
    <Center flex={1}>
      <Image source={Logo} alt="" />

      <Heading
        color="gray.100"
        fontFamily={"heading"}
        fontSize={"3xl"}
        marginTop={4}
      >
        marketspace
      </Heading>
      <Text color="gray.300" fontSize={"sm"}>
        Seu espaço de compra e venda
      </Text>

      <VStack marginTop={16} width="100%" paddingX={12}>
        <VStack>
          <VStack space={4}>
            <Text color="gray.200" fontSize="sm" textAlign="center">
              Acesse sua conta
            </Text>

            <ControlledInput
              name="email"
              control={control}
              autoCapitalize="none"
              placeholder="E-mail"
              error={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <ControlledInput
              name="password"
              control={control}
              placeholder="Senha"
              passwordType
              error={!!errors.password}
              errorMessage={errors.password?.message}
            />
          </VStack>
          <Button
            title="Entrar"
            marginTop={"8"}
            onPress={handleSubmit(onSubmit)}
          />
        </VStack>

        <VStack marginTop={16} space={4}>
          <Text color="gray.200" fontSize={"sm"} textAlign="center">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar uma conta" variant="light" />
        </VStack>
      </VStack>
    </Center>
  );
};
