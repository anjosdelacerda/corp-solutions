const escolaridade = [
  "Não tem formação",
  "Ensino fundamento completo",
  "Ensino fundamental incompleto",
  "Ensino médio completo",
  "Ensino médio incompleto",
  "Ensino superior completo",
  "Ensino superior incompleto",
];

const deficiencia = [
  "Não tem deficiência",
  "Deficiência auditiva",
  "Deficiência física",
  "Deficiência intelctual",
  "Deficiência mental",
  "Deficiência múltipla",
  "Deficiência visual",
];

const etnia = ["Branca", "Preta", "Parda", "Indígena", "Amarela"];

const orientacaoSexual = [
  "Heterosexual",
  "Homossexual",
  "Bissexual",
  "Pansexual",
  "Assexual",
];

const genero = [
  "Masculino",
  "Feminino",
  "Transgênero",
  "Cisgênero",
  "Não-binário",
  "Prefiro não dizer",
  "Outro",
];

interface IOptions {
  escolaridade: string[];
  deficiencia: string[];
  etnia: string[];
  orientacaoSexual: string[];
  genero: string[];
}

export const options: IOptions = {
  escolaridade,
  deficiencia,
  etnia,
  orientacaoSexual,
  genero,
};
