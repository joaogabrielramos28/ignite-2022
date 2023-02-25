import MaskInput, { Mask } from "react-native-mask-input";
import { Container } from "./styles";

type InputMaskProps = {
  value: string;
  onChangeText: (masked: string, unmasked: string) => void;
  mask: Mask;
};

export const InputMask = ({ mask, onChangeText, value }: InputMaskProps) => {
  return (
    <Container
      placeholder=""
      value={value}
      onChangeText={onChangeText}
      mask={mask}
    />
  );
};
