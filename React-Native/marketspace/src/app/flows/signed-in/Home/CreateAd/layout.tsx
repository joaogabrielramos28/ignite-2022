import { Header } from "@components/Header";
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Radio,
  ScrollView,
  Switch,
  Text,
  TextArea,
  VStack,
} from "native-base";
import React from "react";
import { ImageAdd } from "../components/ImageAdd";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

type Props = {
  goBack: () => void;
};

export const CreateAdLayout = ({ goBack }: Props) => {
  return (
    <ScrollView flex={1}>
      <Flex justifyContent={"space-between"} flex={1}>
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
              <ImageAdd onPress={() => {}} />
            </Box>

            <VStack marginTop={8} space={4}>
              <Text color="gray.200" fontFamily="heading" fontSize="md">
                Sobre o produto
              </Text>
              <Input placeholder="Título do anúncio" />
              <TextArea
                autoCompleteType=""
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

              <Radio.Group name="productType">
                <HStack space={6}>
                  <Radio
                    background="transparent"
                    colorScheme="blue"
                    _text={{
                      color: "gray.200",
                      fontSize: "md",
                    }}
                    value="one"
                    my={1}
                  >
                    Produto novo
                  </Radio>
                  <Radio
                    background="transparent"
                    _text={{
                      color: "gray.200",
                      fontSize: "md",
                    }}
                    value="two"
                    my={1}
                  >
                    Produto usado
                  </Radio>
                </HStack>
              </Radio.Group>
            </VStack>
            <VStack space={4}>
              <Text color="gray.200" fontFamily="heading" fontSize="md">
                Venda
              </Text>

              <Input placeholder="Valor" />

              <Text color="gray.200" fontFamily="heading" fontSize="md">
                Aceita troca?
              </Text>
              <Switch colorScheme="blue" />

              <Text color="gray.200" fontFamily="heading" fontSize="md">
                Meios de pagamentos aceitos
              </Text>

              <Checkbox.Group>
                <VStack space={2}>
                  <Checkbox value="0" colorScheme="blue">
                    Boleto
                  </Checkbox>
                  <Checkbox value="0" colorScheme="blue">
                    Pix
                  </Checkbox>
                  <Checkbox value="0" colorScheme="blue">
                    Dinheiro
                  </Checkbox>
                  <Checkbox value="0" colorScheme="blue">
                    Cartão de Crédito
                  </Checkbox>
                  <Checkbox value="0" colorScheme="blue">
                    Depósito Bancário
                  </Checkbox>
                </VStack>
              </Checkbox.Group>
            </VStack>
          </VStack>
        </VStack>

        <HStack padding={6} bgColor="gray.700" space={2}>
          <Button title="Cancelar" flex={1} variant="light" />
          <Button title="Avançar" flex={1} variant="secondary" />
        </HStack>
      </Flex>
    </ScrollView>
  );
};
