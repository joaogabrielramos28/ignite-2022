import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { StyledPaper } from "../StyledPaper";
import {
  Input,
  InputGroup,
  InputSize,
  RegisterAddressContent,
  RegisterAddressHeader,
  RegisterAddressHeaderContent,
  RegisterAddressSubTitle,
  RegisterAddressTitle,
} from "./styles";

export const RegisterAddress: React.FC = () => {
  const { color } = useTheme();
  return (
    <StyledPaper>
      <RegisterAddressHeader>
        <MapPinLine size={22} color={color["yellow-dark"]} />
        <RegisterAddressHeaderContent>
          <RegisterAddressTitle>Endereço de Entrega</RegisterAddressTitle>
          <RegisterAddressSubTitle>
            Informe o endereço onde deseja receber seu pedido
          </RegisterAddressSubTitle>
        </RegisterAddressHeaderContent>
      </RegisterAddressHeader>

      <RegisterAddressContent>
        <Input width={InputSize.md} placeholder="CEP" />
        <Input width={InputSize["2xl"]} placeholder="Rua" />

        <InputGroup>
          <Input width={InputSize.md} placeholder="Número" />
          <Input width={InputSize.xl} placeholder="Complemento" />
        </InputGroup>
        <InputGroup>
          <Input width={InputSize.md} placeholder="Bairro" />
          <Input width={InputSize.lg} placeholder="Cidade" />
          <Input width={InputSize.sm} placeholder="UF" />
        </InputGroup>
      </RegisterAddressContent>
    </StyledPaper>
  );
};
