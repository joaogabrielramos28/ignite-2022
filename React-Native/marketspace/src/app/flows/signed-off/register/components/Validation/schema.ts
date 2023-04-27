import * as yup from "yup";

export const RegisterSchemaValidation = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Campo obrigatório"),
  tel: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
