import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logoCorpSolutions from "../../assets/logos/corp-solutions.png";

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      maxWidth={"1280px"}
      margin={"auto"}
      paddingY={"20px"}
      className="nav-bar"
      zIndex={1}
    >
      <img src={logoCorpSolutions} alt="Logo da Corp Solutions" height={61} />

      {isMobile ? (
        <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      ) : (
        <Stack spacing={4} direction="row" alignItems={"center"}>
          <Button variant="text" href="/">
            Início
          </Button>
          <Button variant="text" href="#solutions">
            Sobre
          </Button>
          <Button variant="text" href="#partners">
            Empresas
          </Button>
          <Button variant="outlined" href="/register">
            Cadastrar
          </Button>
          <Button variant="contained" href="/login">
            Entrar
          </Button>
        </Stack>
      )}

      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <Stack spacing={4} direction="column" padding={6}>
          <Button variant="text" href="/">
            Início
          </Button>
          <Button variant="text" href="#solutions">
            Sobre
          </Button>
          <Button variant="text" href="#partners">
            Empresas
          </Button>
          <Button variant="outlined" href="/register">
            Cadastrar
          </Button>
          <Button variant="contained" href="/login">
            Entrar
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Nav;
