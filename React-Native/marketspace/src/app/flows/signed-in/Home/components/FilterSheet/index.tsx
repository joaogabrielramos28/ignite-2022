import { Button } from "@components/Button";
import {
  Actionsheet,
  Badge,
  Checkbox,
  HStack,
  Heading,
  IconButton,
  Switch,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { X, XCircle } from "phosphor-react-native";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const FilterSheet = ({ isOpen, onClose }: Props) => {
  const { colors } = useTheme();
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content padding={6}>
        <HStack w="100%" justifyContent="space-between" alignItems="center">
          <Heading fontFamily="heading" color="gray.100" fontSize="lg">
            Filtrar anúncios
          </Heading>
          <IconButton
            onPress={onClose}
            icon={<X color={colors.gray[400]} size={24} />}
            _pressed={{
              bg: "gray.500",
            }}
          />
        </HStack>
        <VStack marginTop={4} w="100%">
          <Text fontSize="sm" color="gray.200" fontFamily="heading">
            Condição
          </Text>

          <HStack space={2} mt={3}>
            <Badge
              w={16}
              padding={1}
              bgColor="blue.300"
              rounded="full"
              _text={{
                color: "gray.700",
                fontFamily: "heading",
              }}
              endIcon={
                <IconButton
                  size="xs"
                  padding={0}
                  icon={
                    <XCircle size={16} color={colors.gray[700]} weight="fill" />
                  }
                />
              }
            >
              Novo
            </Badge>
            <Badge
              w={16}
              bgColor="gray.500"
              rounded="full"
              _text={{
                color: "gray.300",
                fontFamily: "heading",
              }}
            >
              Usado
            </Badge>
          </HStack>

          <VStack mt={4}>
            <Text fontSize="sm" color="gray.200" fontFamily="heading">
              Aceita troca?
            </Text>

            <Switch colorScheme="blue" marginTop={3} />
          </VStack>

          <VStack mt={4}>
            <Text fontSize="sm" color="gray.200" fontFamily="heading">
              Meios de pagamento aceitos
            </Text>

            <Checkbox.Group onChange={() => {}}>
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
          </VStack>
        </VStack>

        <HStack space={4} mt={16}>
          <Button title="Resetar filtros" flex={1} variant="light" />
          <Button title="Aplicar filtros" flex={1} variant="secondary" />
        </HStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
