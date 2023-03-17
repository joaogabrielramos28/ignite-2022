import {
  FormControl,
  IInputProps,
  Input as NativeBaseInput,
  Text,
} from "native-base";
import React from "react";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export const Input = ({ errorMessage = null, isInvalid, ...rest }: Props) => {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl isInvalid={invalid} mb={2}>
      <NativeBaseInput
        bg={"gray.700"}
        h={14}
        px={4}
        borderWidth={0}
        fontSize={"md"}
        color={"white"}
        fontFamily="body"
        mb={4}
        placeholderTextColor={"gray.300"}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage m={0} mt={0} padding={0}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
