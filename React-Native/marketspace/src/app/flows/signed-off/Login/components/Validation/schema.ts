import * as yup from "yup";

export const LoginSchemaValidation = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});
