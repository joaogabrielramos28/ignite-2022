import { Header } from "@components/Header";
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Image,
  Radio,
  ScrollView,
  Skeleton,
  Switch,
  Text,
  TextArea,
  VStack,
} from "native-base";
import React from "react";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Controller, useForm } from "react-hook-form";
import { ControlledInput } from "@components/ControlledInput";
import { Masks } from "react-native-mask-input";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { ImageAdd } from "./components/ImageAdd";
import { ProductImage } from "./components/ProductImage";
import { FormData } from ".";

type Props = {
  goBack: () => void;
  handleAddImages: () => Promise<void>;
  handleRemoveImage: (image: string) => void;
  handleCreateAd: (data: FormData) => Promise<void>;
  images: string[];
  loadingImage: boolean;
};

const schema = yup.object().shape({
  title: yup.string().required("O título é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
  type: yup.string().required("O tipo é obrigatório"),
  price: yup.string().required("O preço é obrigatório"),
  acceptExchange: yup.boolean().required("A troca é obrigatória"),
  paymentMethods: yup
    .array()
    .required("Os métodos de pagamento são obrigatórios"),
});

export const CreateAdLayout = ({
  goBack,
  handleAddImages,
  images,
  handleRemoveImage,
  loadingImage,
  handleCreateAd,
}: Props) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      acceptExchange: false,
      paymentMethods: [],
      description: "",
      price: "",
      title: "",
      type: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    handleCreateAd(data);
  };

  return (
    <>
      <ScrollView flex={1}>
        <VStack padding={6} space={3} safeAreaY>
          <Header title="Criar anúncio" onBack={goBack} />

          <VStack marginTop={4}>
            <Text color="gray.200" fontFamily="heading" fontSize="md">
              Imagens
            </Text>
            <Text color="gray.300" fontSize="sm">
              Escolha até 3 imagens para mostrar o quando o seu produto é
              incrível!
            </Text>

            <Box marginTop={4}>
              <HStack space={4}>
                {loadingImage ? (
                  <Skeleton
                    width={"100px"}
                    h={"100px"}
                    startColor={"gray.400"}
                    endColor={"gray.700"}
                    borderRadius={"6px"}
                  />
                ) : null}
                {images.map((image) => (
                  <>
                    <ProductImage
                      uri={image}
                      key={image}
                      onDelete={() => handleRemoveImage(image)}
                    />
                  </>
                ))}
                {images.length !== 3 ? (
                  <ImageAdd onPress={handleAddImages} />
                ) : null}
              </HStack>
            </Box>

            <VStack marginTop={8} space={4}>
              <Text color="gray.200" fontFamily="heading" fontSize="md">
                Sobre o produto
              </Text>
              <ControlledInput
                control={control}
                name="title"
                placeholder="Título do anúncio"
                autoComplete="off"
                autoCorrect={false}
              />
              <Controller
                name="description"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextArea
                    autoCompleteType=""
                    onChangeText={onChange}
                    value={value}
                    padding={3}
                    bgColor="gray.700"
                    placeholderTextColor="gray.400"
                    borderWidth={0}
                    placeholder="Descrição do produto"
                    _input={{
                      fontSize: "md",
                    }}
                    h={40}
                  />
                )}
              />

              <Controller
                control={control}
                name="type"
                render={({ field: { onChange, value } }) => (
                  <Radio.Group name="type" onChange={onChange} value={value}>
                    <HStack space={6}>
                      <Radio
                        background="transparent"
                        colorScheme="blue"
                        _text={{
                          color: "gray.200",
                          fontSize: "md",
                        }}
                        value="new"
                        my={1}
                      >
                        Produto novo
                      </Radio>
                      <Radio
                        background="transparent"
                        colorScheme="blue"
                        _text={{
                          color: "gray.200",
                          fontSize: "md",
                        }}
                        value="used"
                        my={1}
                      >
                        Produto usado
                      </Radio>
                    </HStack>
                  </Radio.Group>
                )}
              />
            </VStack>
            <VStack space={4} mt={4}>
              <Text color="gray.200" fontFamily="heading" fontSize="md">
                Venda
              </Text>

              <ControlledInput
                control={control}
                name="price"
                placeholder="Valor"
                mask={Masks.BRL_CURRENCY}
                isMasked={true}
                sendUnmaskedValue
              />

              <Text color="gray.200" fontFamily="heading" fontSize="md">
                Aceita troca?
              </Text>

              <Controller
                name="acceptExchange"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Switch
                    defaultIsChecked={false}
                    colorScheme="blue"
                    isChecked={value}
                    onToggle={onChange}
                  />
                )}
              />

              <Text color="gray.200" fontFamily="heading" fontSize="md">
                Meios de pagamentos aceitos
              </Text>

              <Controller
                control={control}
                name="paymentMethods"
                render={({ field: { onChange, value } }) => (
                  <Checkbox.Group onChange={onChange} value={value}>
                    <VStack space={2}>
                      <Checkbox value="boleto" colorScheme="blue">
                        Boleto
                      </Checkbox>
                      <Checkbox value="pix" colorScheme="blue">
                        Pix
                      </Checkbox>
                      <Checkbox value="cash" colorScheme="blue">
                        Dinheiro
                      </Checkbox>
                      <Checkbox value="card" colorScheme="blue">
                        Cartão de Crédito
                      </Checkbox>
                      <Checkbox value="deposit" colorScheme="blue">
                        Depósito Bancário
                      </Checkbox>
                    </VStack>
                  </Checkbox.Group>
                )}
              />
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>

      <HStack padding={6} bgColor="gray.700" space={2}>
        <Button title="Cancelar" flex={1} variant="light" />
        <Button
          title="Avançar"
          flex={1}
          variant="secondary"
          onPress={handleSubmit(onSubmit)}
        />
      </HStack>
    </>
  );
};
