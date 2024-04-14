import { Box, Button, Stack } from "@mui/material";
import logoCorpSolutions from "../../assets/logos/corp-solutions.png";

const Nav = () => {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      maxWidth={"1280px"}
      paddingTop={"20px"}
      margin={"auto"}
      className="nav-bar"
      zIndex={1}
    >
      <img src={logoCorpSolutions} alt="Logo da Corp Solutions" height={61} />

      <Stack
        spacing={4}
        direction="row"
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Button variant="text" href="/">
          Início
        </Button>
        <Button variant="text" href="#solutions">
          Sobre
        </Button>
        <Button variant="text" href="#partners">
          Empresas
        </Button>
        <Button variant="outlined">Cadastrar</Button>
        <Button variant="contained">Entrar</Button>
      </Stack>
    </Box>
  );
};

export default Nav;
