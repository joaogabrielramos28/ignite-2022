import react from "react";
import { Button } from "@components/Button";
import {
  Avatar,
  Badge,
  Box,
  HStack,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
  useTheme,
} from "native-base";
import {
  ArrowLeft,
  Bank,
  Barcode,
  CreditCard,
  Money,
  PencilSimpleLine,
  Power,
  QrCode,
  Tag,
  TrashSimple,
} from "phosphor-react-native";
import { Carousel } from "@components/Carousel";
import { api } from "@infra/http/api";
import { formattedMoney } from "@utils/formatMoney";
import { IProduct } from "@model/Product";
import { Header } from "@components/Header";
import { Dimensions } from "react-native";

type PreviewAdLayoutProps = {
  data: IProduct;
  loading: boolean;
  goBack: () => void;
};

const WIDTH = Dimensions.get("screen").width;

export const MyAdLayout = ({ data, loading, goBack }: PreviewAdLayoutProps) => {
  const { colors } = useTheme();

  const startColor = "gray.400";
  const endColor = "gray.700";

  const getPaymentIcons = (payment: string) => {
    const iconSize = 18;
    const iconColor = colors.gray[100];
    switch (payment) {
      case "boleto":
        return {
          icon: <Barcode size={iconSize} color={iconColor} />,
          text: "Boleto",
        };
      case "pix":
        return {
          icon: <QrCode size={iconSize} color={iconColor} />,
          text: "Pix",
        };
      case "deposit":
        return {
          icon: <Bank size={iconSize} color={iconColor} />,
          text: "Depósito",
        };
      case "cash":
        return {
          icon: <Money size={iconSize} color={iconColor} />,
          text: "Dinheiro",
        };
      default:
        return {
          icon: <CreditCard size={iconSize} color={iconColor} />,
          text: "Cartão de Crédito",
        };
    }
  };

  return (
    <>
      <ScrollView flex={1}>
        <VStack
          paddingTop={6}
          safeAreaY
          bgColor={"gray.700"}
          space={2}
          alignItems="center"
          h={32}
        >
          <Header
            title=""
            onBack={goBack}
            customIcon={<PencilSimpleLine size={24} color={colors.gray[100]} />}
            onCustomIconPress={() => {}}
          />
        </VStack>

        {loading ? (
          <Skeleton
            height={280}
            width={WIDTH}
            startColor={startColor}
            endColor={endColor}
          />
        ) : (
          <Carousel
            images={data?.product_images?.map(
              (image) => `${api.defaults.baseURL}/images/${image.path}`
            )}
          />
        )}

        <VStack px={6} marginTop={8}>
          <HStack space={2} alignItems="center">
            {loading ? (
              <Skeleton
                width={8}
                h={8}
                rounded="full"
                startColor={startColor}
                endColor={endColor}
              />
            ) : (
              <Avatar
                borderWidth={2}
                borderColor={"blue.300"}
                width={8}
                h={8}
                source={{
                  uri: `${api.defaults.baseURL}/images/${data?.user?.avatar}`,
                }}
              />
            )}

            {loading ? (
              <Skeleton.Text
                lines={1}
                width={32}
                startColor={startColor}
                endColor={endColor}
              />
            ) : (
              <Text fontSize="sm" color="gray.100">
                {data.user?.name}
              </Text>
            )}
          </HStack>

          <VStack marginTop={8}>
            {loading ? (
              <Skeleton
                width={12}
                rounded={"full"}
                startColor={startColor}
                endColor={endColor}
                height={6}
              />
            ) : (
              <Badge
                w={12}
                bg="gray.500"
                rounded="full"
                _text={{
                  color: "gray.200",
                }}
              >
                {data.is_new ? "Novo" : "Usado"}
              </Badge>
            )}

            <HStack marginTop={4} space={2} justifyContent="space-between">
              {loading ? (
                <Skeleton.Text
                  width={32}
                  lines={1}
                  _line={{
                    height: 6,
                  }}
                  startColor={startColor}
                  endColor={endColor}
                />
              ) : (
                <Heading
                  color="gray.100"
                  fontSize="20"
                  fontFamily="heading"
                  flexShrink={1}
                >
                  {data.name}
                </Heading>
              )}

              <HStack alignItems="center" space={1}>
                {loading ? (
                  <Skeleton.Text
                    width={32}
                    lines={1}
                    _line={{
                      height: 6,
                    }}
                    startColor={startColor}
                    endColor={endColor}
                  />
                ) : (
                  <>
                    <Text fontSize="sm" color="blue.300">
                      R$
                    </Text>
                    <Heading color="blue.300" fontFamily="heading">
                      {formattedMoney(Number(data.price))}
                    </Heading>
                  </>
                )}
              </HStack>
            </HStack>
            {loading ? (
              <Skeleton.Text
                width={32}
                lines={1}
                marginTop={2}
                startColor={startColor}
                endColor={endColor}
              />
            ) : (
              <Text marginTop={2} color="gray.200" fontSize="sm">
                {data.description}
              </Text>
            )}
          </VStack>

          <HStack space={2} marginTop={4} alignItems="center">
            {loading ? (
              <Skeleton.Text
                width={32}
                lines={1}
                marginTop={2}
                startColor={startColor}
                endColor={endColor}
              />
            ) : (
              <>
                <Heading color="gray.200" fontFamily="heading" fontSize="sm">
                  Aceita troca?
                </Heading>
                <Text fontSize="sm" color="gray.200">
                  {data.accept_trade ? "Sim" : "Não"}
                </Text>
              </>
            )}
          </HStack>

          <VStack marginTop={4}>
            {loading ? (
              <Skeleton startColor={startColor} endColor={endColor} />
            ) : (
              <>
                <Heading color="gray.200" fontFamily="heading" fontSize="sm">
                  Meios de pagamento:
                </Heading>
                <VStack mt={2} space={1}>
                  {data?.payment_methods?.map((payment) => (
                    <HStack space={2}>
                      {getPaymentIcons(payment.key).icon}
                      <Text fontSize="sm" color="gray.200">
                        {getPaymentIcons(payment.key).text}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </>
            )}
          </VStack>
        </VStack>
      </ScrollView>
      <VStack padding={6} bgColor="gray.700" space={2}>
        <Button
          title="Desativar anúncio"
          variant="secondary"
          leftIcon={<Power color={colors.gray[700]} size={16} />}
          onPress={() => {}}
        />
        <Button
          title="Excluir anúncio"
          variant="light"
          leftIcon={<TrashSimple color={colors.gray[300]} size={16} />}
          onPress={() => {}}
        />
      </VStack>
    </>
  );
};
