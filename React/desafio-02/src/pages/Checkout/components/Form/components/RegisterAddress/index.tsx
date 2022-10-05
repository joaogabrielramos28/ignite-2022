import { MapPinLine } from "phosphor-react";
import { Control, useFormContext } from "react-hook-form";
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
  const { register } = useFormContext();

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
        <Input width={InputSize.md} placeholder="CEP" {...register("cep")} />
        <Input
          width={InputSize["2xl"]}
          placeholder="Rua"
          {...register("street")}
        />

        <InputGroup>
          <Input
            width={InputSize.md}
            placeholder="Número"
            {...register("number")}
          />
          <Input
            width={InputSize.xl}
            placeholder="Complemento"
            {...register("complement")}
          />
        </InputGroup>
        <InputGroup>
          <Input
            width={InputSize.md}
            placeholder="Bairro"
            {...register("district")}
          />
          <Input
            width={InputSize.lg}
            placeholder="Cidade"
            {...register("city")}
          />
          <Input width={InputSize.sm} placeholder="UF" {...register("state")} />
        </InputGroup>
      </RegisterAddressContent>
    </StyledPaper>
  );
};
