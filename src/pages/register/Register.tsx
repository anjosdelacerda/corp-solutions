import InputRegister from "../../layout/inputRegister/inputRegister";
import { Box, Button, Typography } from "@mui/material";
// import logoCorpSolutions from "../../assets/logos/corp-solutions.png";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome"),
    email: yup.string().email("e-mail inválido").required("Digite seu e-mail"),
    birthday: yup
      .date()
      .required("Digite sua data de nascimento")
      .typeError("Digite sua data de nascimento"),
    password: yup
      .string()
      .required("Digite a senha com no mínimo 8 caracteres")
      .min(6, "A senha deve ter pelo menos 8 caracteres"),
    checkedPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais")
      .required("Digite a mesma senha com no mínimo 8 caracteres"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: any) => {
    data.isAdm = false;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:3000/usuarios", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar os dados do usuário.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Usuário enviado com sucesso:", data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });

    navigate("/");
  };

  return (
    <Box
      width={"100vw"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      marginY={"20px"}
    >
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          padding={"60px"}
          gap={"80px"}
          sx={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h3"
            fontSize={"46px"}
            fontWeight={"bold"}
            gutterBottom
          >
            Cadastre-se
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"45px"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
              <InputRegister
                label={"Nome completo"}
                type={"text"}
                register={register}
                name={"name"}
              />
              {errors.name && <small>{errors.name.message}</small>}
              <InputRegister
                label={"E-mail"}
                type={"email"}
                register={register}
                name={"email"}
              />
              {errors.email && <small>{errors.email.message}</small>}

              <InputRegister
                label={""}
                type={"date"}
                register={register}
                name={"birthday"}
              />
              {errors.birthday && <small>{errors.birthday.message}</small>}
              <InputRegister
                label={"Senha"}
                type={"password"}
                register={register}
                name={"password"}
              />
              {errors.password && <small>{errors.password.message}</small>}

              <InputRegister
                label={"Confirme sua senha"}
                type={"password"}
                register={register}
                name={"checkedPassword"}
              />
              {errors.checkedPassword && (
                <small>{errors.checkedPassword.message}</small>
              )}
            </Box>
            <Button variant="contained" className="limit-input" type="submit">
              Cadastrar
            </Button>
            <Typography variant={"body2"} color={"#808080"}>
              Já possui uma conta?{" "}
              <Link className="FormLink" to={"/login"}>
                Entrar
              </Link>
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
