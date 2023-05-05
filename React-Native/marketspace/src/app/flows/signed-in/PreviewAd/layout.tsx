import react from "react";
import { Button } from "@components/Button";
import {
  Avatar,
  Badge,
  Box,
  HStack,
  Heading,
  ScrollView,
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
  QrCode,
  Tag,
} from "phosphor-react-native";
import { Carousel } from "@components/Carousel";
import { PreviewAdParams } from "@routes/app.routes";
import { Loading } from "@components/Loading";
import { api } from "@infra/http/api";
import { IUser } from "@model/User";
import { formattedMoney } from "@utils/formatMoney";

type PreviewAdLayoutProps = {
  data: PreviewAdParams["data"];
  user: IUser | null;
  goBack: () => void;
  handleCreateAd: () => Promise<void>;
};

export const PreviewAdLayout = ({
  data,
  user,
  goBack,
  handleCreateAd,
}: PreviewAdLayoutProps) => {
  const { colors } = useTheme();

  if (!data) return <Loading />;

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
          bgColor={"blue.300"}
          space={2}
          alignItems="center"
          h={32}
        >
          <Heading
            textAlign="center"
            fontSize="md"
            fontFamily="heading"
            color="gray.700"
          >
            Pré visualização do anúncio
          </Heading>
          <Text textAlign="center" color="gray.700" size="sm">
            É assim que seu produto vai aparecer!
          </Text>
        </VStack>

        <Carousel images={data?.images} />

        <VStack px={6} marginTop={8}>
          <HStack space={2} alignItems="center">
            <Avatar
              borderWidth={2}
              borderColor={"blue.300"}
              width={8}
              h={8}
              source={{
                uri: `${api.defaults.baseURL}/images/${user?.avatar}`,
              }}
            />
            <Text fontSize="sm" color="gray.100">
              {user?.name}
            </Text>
          </HStack>

          <VStack marginTop={8}>
            <Badge
              w={16}
              bg="gray.500"
              rounded="full"
              _text={{
                color: "gray.200",
              }}
            >
              {data.type === "new" ? "Novo" : "Usado"}
            </Badge>

            <HStack marginTop={4} space={2} justifyContent="space-between">
              <Heading
                color="gray.100"
                fontSize="20"
                fontFamily="heading"
                flexShrink={1}
              >
                {data.title}
              </Heading>
              <HStack alignItems="center" space={1}>
                <Text fontSize="sm" color="blue.300">
                  R$
                </Text>
                <Heading color="blue.300" fontFamily="heading">
                  {formattedMoney(Number(data.price))}
                </Heading>
              </HStack>
            </HStack>

            <Text marginTop={2} color="gray.200" fontSize="sm">
              {data.description}
            </Text>
          </VStack>

          <HStack space={2} marginTop={4} alignItems="center">
            <Heading color="gray.200" fontFamily="heading" fontSize="sm">
              Aceita troca?
            </Heading>
            <Text fontSize="sm" color="gray.200">
              {data.acceptExchange ? "Sim" : "Não"}
            </Text>
          </HStack>

          <VStack marginTop={4}>
            <Heading color="gray.200" fontFamily="heading" fontSize="sm">
              Meios de pagamento:
            </Heading>
            <VStack mt={2} space={1}>
              {data.paymentMethods.map((payment) => (
                <HStack space={2}>
                  {getPaymentIcons(payment).icon}
                  <Text fontSize="sm" color="gray.200">
                    {getPaymentIcons(payment).text}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
      <HStack padding={6} bgColor="gray.700" space={2}>
        <Button
          title="Voltar e editar"
          flex={1}
          variant="light"
          leftIcon={<ArrowLeft color={colors.gray[200]} size={16} />}
          onPress={goBack}
        />
        <Button
          title="Publicar"
          flex={1}
          variant="primary"
          leftIcon={<Tag color={colors.gray[600]} size={16} />}
          onPress={handleCreateAd}
        />
      </HStack>
    </>
  );
};
