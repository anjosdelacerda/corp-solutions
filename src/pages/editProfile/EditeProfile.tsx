import { Box, Button, TextField, Typography } from "@mui/material";
import Input from "../../components/input/input";
import InputBox from "../../components/input/inputBox";
import SelectInput from "../../components/input/select";
import "./editeProfile.css";

const EditeProfile = () => {
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

  const handleSubmit = () => {
    console.log("teste");
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Box display={"flex"} justifyContent={"center"} className="form-editar">
        <Box
          width={"1225px"}
          sx={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          padding={"50px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"30px"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
            <Typography variant="h3" fontWeight={"bold"}>
              Editar perfil
            </Typography>

            <Typography variant="h6" fontWeight={"bold"}>
              Dados cadastrais
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} gap={"30px"}>
              <InputBox>
                <Input label="Nome completo" className="limit-input" required />
                <Input label="Nome social" className="limit-input" />
                <Input label="CPF" style={{ width: "320px" }} required />
                <SelectInput label="Escolaridade" options={escolaridade} />
              </InputBox>
              <InputBox>
                <Input label="Endereço" className="limit-input" required />
                <Input
                  label="Link do perfil do LinkedIn"
                  className="limit-input"
                  required
                />
                <TextField
                  id="date"
                  label="Data de nascimento"
                  type="date"
                  size={"small"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ width: "320px" }}
                  required
                />
                <Input
                  label="Telefone"
                  style={{ width: "320px" }}
                  type="number"
                  required
                />
              </InputBox>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
            <Typography variant="h6" fontWeight={"bold"}>
              Diversidade
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} gap={"30px"}>
              <InputBox>
                <SelectInput label="Deficiência" options={deficiencia} />
                <SelectInput label="Etnia" options={etnia} />
              </InputBox>
              <InputBox>
                <SelectInput
                  label="Orientação sexual"
                  options={orientacaoSexual}
                />
                <SelectInput label="Gênero" options={genero} />
              </InputBox>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"40px"}
            paddingTop={"40px"}
          >
            <Button variant="contained" className="limit-input" type="submit">
              Concluir
            </Button>
            <Button variant="text" href="/">
              Voltar
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
export default EditeProfile;
