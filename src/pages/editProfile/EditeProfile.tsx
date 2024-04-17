import { Box, Button, TextField, Typography } from "@mui/material";
import Input from "../../components/input/input";
import InputBox from "../../components/input/inputBox";
import SelectInput from "../../components/input/select";
import "./editeProfile.css";
import { options } from "./optionsFromProfiles";
import * as yup from "yup";
import { useState } from "react";
import {
  formatCpf,
  formatPhone,
  isOver18YearsOld,
  validationSchema,
} from "./validators";

interface IFormData {
  nomeCompleto: string;
  nomeSocial: string;
  cpf: string;
  escolaridade: string;
  endereco: string;
  linkedin: string;
  dataNascimento: string;
  telefone: string;
  deficiencia: string;
  etnia: string;
  orientacaoSexual: string;
  genero: string;
}

const EditeProfile = () => {
  const [formData, setFormData] = useState<IFormData>({
    nomeCompleto: "",
    nomeSocial: "",
    cpf: "",
    escolaridade: "",
    endereco: "",
    linkedin: "",
    dataNascimento: "",
    telefone: "",
    deficiencia: "",
    etnia: "",
    orientacaoSexual: "",
    genero: "",
  });

  const [errors, setErrors] = useState<Partial<IFormData>>({});

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const isOver18 = isOver18YearsOld(formData.dataNascimento);
      if (!isOver18) {
        throw new Error("Você deve ter pelo menos 18 anos de idade.");
      }

      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Formulário validado", formData);
    } catch (error) {
      const newErrors: Partial<IFormData> = {};
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => {
          console.error(err.path, err.message);
          alert(err.message);
        });
      } else {
        console.error(error);
        alert(error);
      }
      setErrors(newErrors);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "cpf"
          ? formatCpf(value)
          : name === "telefone"
          ? formatPhone(value)
          : value,
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Box display="flex" justifyContent="center" className="form-editar">
        <Box
          width="1225px"
          sx={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          padding="50px"
          display="flex"
          flexDirection="column"
          gap="30px"
        >
          <Box display="flex" flexDirection="column" gap="30px">
            <Typography variant="h3" fontWeight="bold">
              Editar perfil
            </Typography>

            <Typography variant="h6" fontWeight="bold">
              Dados cadastrais
            </Typography>
            <Box display="flex" flexWrap="wrap" gap="30px">
              <InputBox>
                <Input
                  label="Nome completo"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  className="limit-input"
                  onChange={handleChange}
                  required
                />
                {errors.nomeCompleto && (
                  <small className="error">{errors.nomeCompleto}</small>
                )}
                <Input
                  label="Nome social"
                  name="nomeSocial"
                  value={formData.nomeSocial}
                  className="limit-input"
                  onChange={handleChange}
                />
                <Input
                  label="CPF"
                  name="cpf"
                  value={formData.cpf}
                  type="text"
                  style={{ width: "320px" }}
                  onChange={handleChange}
                  maxLength={14}
                  required
                />
                {errors.cpf && <small className="error">{errors.cpf}</small>}
                <SelectInput
                  label="Escolaridade"
                  name="escolaridade"
                  value={formData.escolaridade}
                  options={options.escolaridade}
                  onChange={(value) =>
                    handleChange({
                      target: { name: "escolaridade", value: value },
                    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
                  }
                />
              </InputBox>
              <InputBox>
                <Input
                  label="Endereço"
                  name="endereco"
                  value={formData.endereco}
                  className="limit-input"
                  onChange={handleChange}
                  required
                />
                {errors.endereco && (
                  <small className="error">{errors.endereco}</small>
                )}
                <Input
                  label="Link do perfil do LinkedIn"
                  name="linkedin"
                  value={formData.linkedin}
                  className="limit-input"
                  onChange={handleChange}
                  required
                />
                {errors.linkedin && (
                  <small className="error">{errors.linkedin}</small>
                )}
                <TextField
                  id="date"
                  label="Data de nascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  type="date"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ width: "320px" }}
                  onChange={handleChange}
                  required
                />

                {errors.dataNascimento && (
                  <small className="error">{errors.dataNascimento}</small>
                )}
                <Input
                  label="Telefone"
                  name="telefone"
                  value={formData.telefone}
                  style={{ width: "320px" }}
                  type="text"
                  onChange={handleChange}
                  maxLength={15}
                  required
                />
                {errors.telefone && (
                  <small className="error">{errors.telefone}</small>
                )}
              </InputBox>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap="30px">
            <Typography variant="h6" fontWeight="bold">
              Diversidade
            </Typography>
            <Box display="flex" flexWrap="wrap" gap="30px">
              <InputBox>
                <SelectInput
                  label="Deficiência"
                  name="deficiencia"
                  value={formData.deficiencia}
                  options={options.deficiencia}
                  onChange={(value) =>
                    handleChange({
                      target: { name: "deficiencia", value: value },
                    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
                  }
                />
                <SelectInput
                  label="Etnia"
                  name="etnia"
                  value={formData.etnia}
                  options={options.etnia}
                  onChange={(value) =>
                    handleChange({
                      target: { name: "etnia", value: value },
                    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
                  }
                />
              </InputBox>
              <InputBox>
                <SelectInput
                  label="Orientação sexual"
                  name="orientacaoSexual"
                  value={formData.orientacaoSexual}
                  options={options.orientacaoSexual}
                  onChange={(value) =>
                    handleChange({
                      target: { name: "orientacaoSexual", value: value },
                    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
                  }
                />
                <SelectInput
                  label="Gênero"
                  name="genero"
                  value={formData.genero}
                  options={options.genero}
                  onChange={(value) =>
                    handleChange({
                      target: { name: "genero", value: value },
                    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
                  }
                />
              </InputBox>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="40px"
            paddingTop="40px"
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
