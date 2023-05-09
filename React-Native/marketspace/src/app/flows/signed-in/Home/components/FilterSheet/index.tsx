import { Button } from "@components/Button";
import {
  Actionsheet,
  Badge,
  Checkbox,
  HStack,
  Heading,
  IconButton,
  Pressable,
  Switch,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { X, XCircle } from "phosphor-react-native";
import React from "react";
import { FilterStateType } from "../..";

type Props = {
  isOpen: boolean;
  filterState: FilterStateType;
  onClose: () => void;
  handleChangeFilter: (filter: Partial<FilterStateType>) => void;
};

export const FilterSheet = ({
  isOpen,
  onClose,
  filterState,
  handleChangeFilter,
}: Props) => {
  const { colors } = useTheme();
  const badgeSelected = {
    bgColor: "blue.300",
    color: "gray.700",
  };

  const [draftState, setDraftState] =
    React.useState<FilterStateType>(filterState);

  const handleChangeDraftFilter = (filter: Partial<FilterStateType>) => {
    setDraftState((prev) => ({
      ...prev,
      ...filter,
    }));
  };

  const handleApplyFilter = () => {
    handleChangeFilter(draftState);
    onClose();
  };

  const handleResetFilter = () => {
    handleChangeFilter({
      acceptExchange: false,
      paymentMethods: [],
      condition: undefined,
    } as FilterStateType);
    handleChangeDraftFilter({
      acceptExchange: false,
      paymentMethods: [],
      condition: undefined,
    });
    onClose();
  };

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
            <Pressable
              onPress={() =>
                handleChangeDraftFilter({
                  condition: "new",
                })
              }
            >
              <Badge
                w={16}
                padding={1}
                bgColor={
                  draftState.condition === "new"
                    ? badgeSelected.bgColor
                    : "gray.500"
                }
                rounded="full"
                _text={{
                  color:
                    draftState.condition === "new"
                      ? badgeSelected.color
                      : "gray.300",
                  fontFamily: "heading",
                }}
                endIcon={
                  draftState.condition === "new" ? (
                    <IconButton
                      onPress={() =>
                        handleChangeDraftFilter({
                          condition: undefined,
                        })
                      }
                      size="xs"
                      padding={0}
                      icon={
                        <XCircle
                          size={16}
                          color={colors.gray[700]}
                          weight="fill"
                        />
                      }
                    />
                  ) : undefined
                }
              >
                Novo
              </Badge>
            </Pressable>
            <Pressable
              onPress={() =>
                handleChangeDraftFilter({
                  condition: "used",
                })
              }
            >
              <Badge
                w={16}
                padding={1}
                bgColor={
                  draftState.condition === "used"
                    ? badgeSelected.bgColor
                    : "gray.500"
                }
                rounded="full"
                _text={{
                  color:
                    draftState.condition === "used"
                      ? badgeSelected.color
                      : "gray.300",
                  fontFamily: "heading",
                }}
                endIcon={
                  draftState.condition === "used" ? (
                    <IconButton
                      onPress={() =>
                        handleChangeDraftFilter({
                          condition: undefined,
                        })
                      }
                      size="xs"
                      padding={0}
                      icon={
                        <XCircle
                          size={16}
                          color={colors.gray[700]}
                          weight="fill"
                        />
                      }
                    />
                  ) : undefined
                }
              >
                Usado
              </Badge>
            </Pressable>
          </HStack>

          <VStack mt={4}>
            <Text fontSize="sm" color="gray.200" fontFamily="heading">
              Aceita troca?
            </Text>

            <Switch
              colorScheme="blue"
              marginTop={3}
              onValueChange={(value) =>
                handleChangeDraftFilter({
                  acceptExchange: value,
                })
              }
            />
          </VStack>

          <VStack mt={4}>
            <Text fontSize="sm" color="gray.200" fontFamily="heading">
              Meios de pagamento aceitos
            </Text>

            <Checkbox.Group
              onChange={(values) =>
                handleChangeDraftFilter({
                  paymentMethods: values,
                })
              }
            >
              <VStack space={2} mt={2}>
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
          <Button
            title="Resetar filtros"
            flex={1}
            variant="light"
            onPress={handleResetFilter}
          />
          <Button
            title="Aplicar filtros"
            flex={1}
            variant="secondary"
            onPress={handleApplyFilter}
          />
        </HStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
