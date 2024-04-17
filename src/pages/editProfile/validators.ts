import * as yup from "yup";

export const validationSchema = yup.object().shape({
  nomeCompleto: yup.string().required("Digite seu nome completo"),
  nomeSocial: yup.string(),
  cpf: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "O CPF precisa ter 11 dígitos")
    .required("Digite os números do seu CPF")
    .min(11, "O CPF deve ter 11 dígitos"),
  escolaridade: yup.string(),
  endereco: yup.string().required("Digite seu endereço"),
  linkedin: yup
    .string()
    .matches(
      /((https?):\/\/)?(www\.)?linkedin\.com\/[^/\s?#]+\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?/,
      "Só aceitamos LinkedIn"
    )
    .required("Digite seu LinkedIn"),
  dataNascimento: yup.date().required("Digite sua data de nascimento"),
  telefone: yup
    .string()
    .matches(
      /^\(?\d{2}\)?\s*\d{4,5}-?\d{4}$/,
      "O telefone precisa ter 10 dígitos"
    )
    .required("Digite seu telefone")
    .min(11, "O telefone deve ter no máximo 11 dígitos"),
  deficiencia: yup.string(),
  etnia: yup.string(),
  orientacaoSexual: yup.string(),
  genero: yup.string(),
});

export const isOver18YearsOld = (dateOfBirth: string): boolean => {
  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);
  const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();
  const isOver18 =
    ageDifference > 18 ||
    (ageDifference === 18 &&
      (currentDate.getMonth() > birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() >= birthDate.getDate())));
  return isOver18;
};

export const formatCpf = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const formatPhone = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d)/, "$1-$2");
};
