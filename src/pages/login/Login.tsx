import { useState } from "react";
import InputLogin from "../../layout/inputLogin/InputLogin";
import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GetLoginUser from "../../utils/getLoginUser/GetLoginUser";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const loginHandler = async (e: any) => {
    e.preventDefault();
    await GetLoginUser("email", email, "senha", password, handleLoginCallback);
    setUser(true);
  };

  const handleLoginCallback = (user: any) => {
    sessionStorage.setItem("usuarioLogado", user.id);
    const email = user.email;
    const parts = email.split("@");
    const domain = parts[1];
    if (domain == "corpsolution.com") {
      navigate("/talentpool");
      return;
    }
    navigate("/jobs");
  };
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <form onSubmit={loginHandler}>
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
            Entrar
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"45px"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
              <InputLogin
                label={"E-mail"}
                type={"email"}
                value={email}
                onChange={handleEmailChange}
              />
              <InputLogin
                label={"Password"}
                type={"password"}
                value={password}
                onChange={handlePasswordChange}
              />
            </Box>
            {user == false || (email == "" && password == "") ? (
              ""
            ) : (
              <Typography
                variant={"body2"}
                color={"#c41010"}
                fontWeight={"500"}
              >
                Usuário ou senha inválido*
              </Typography>
            )}
            <Button
              size="large"
              variant="contained"
              fullWidth
              type="submit"
              disabled={email && password ? false : true}
            >
              Entrar
            </Button>
            <Typography variant={"body2"} color={"#808080"}>
              Não possui uma conta?{" "}
              <Link className="FormLink" to={"/register"}>
                Cadastre-se
              </Link>
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
