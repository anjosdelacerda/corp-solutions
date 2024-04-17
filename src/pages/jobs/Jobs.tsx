import {
  Box,
  Button,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import logoCorpSolutions from "../../assets/logos/corp-solutions.png";
import FieldText from "../../components/input/fieldText";
import JobCard from "../../components/jobCard/jobCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Footer from "../../layout/footer/footer";
import "./jobs.css";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const Jobs = () => {
  const handleSearch = () => {
    console.log("Pesquisa realizada");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box maxWidth={"1920px"}>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxWidth={"1280px"}
        margin={"auto"}
        padding={"20px"}
      >
        <Link to="/">
          <img
            src={logoCorpSolutions}
            alt="Logo da Corp Solutions"
            height={61}
          />
        </Link>
        {isMobile ? (
          <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <Search />
          </IconButton>
        ) : (
          <>
            <Box display="flex" alignItems="center" gap={"20px"}>
              <FieldText label="Pesquisar..." style={{ width: "400px" }} />
              <Button variant="contained" onClick={handleSearch}>
                Buscar
              </Button>
            </Box>
            <Link to="/editeprofile">
              <AccountCircleIcon
                sx={{ mr: 1, fontSize: "40px", color: "#00000040" }}
              />
            </Link>
          </>
        )}

        <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            margin={"20px"}
            gap={"20px"}
          >
            <Box display={"flex"} alignItems={"center"} gap={"40px"}>
              <Link to="/">
                <img
                  src={logoCorpSolutions}
                  alt="Logo da Corp Solutions"
                  height={61}
                />
              </Link>
              <Link to="/login">
                <AccountCircleIcon
                  sx={{ mr: 1, fontSize: "40px", color: "#00000040" }}
                />
              </Link>
            </Box>
            <Box display={"flex"} gap={"20px"}>
              <FieldText label="Pesquisar..." className="pesquisarVagas" />
              <Button variant="contained" onClick={handleSearch}>
                Buscar
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        margin={"auto"}
        padding={"20px"}
        maxWidth={"1280px"}
      >
        <h1>Vagas</h1>
        <Box className="container-jobs">
          <JobCard
            jobTitle="Desenvolvedor Front-End Junior"
            location="São Paulo, SP"
            totalJobs="2 vagas"
            salary="R$ 1.600"
            accessibily="PCD"
          />
          <JobCard
            jobTitle="Designer Gráfico"
            location="Rio de Janeiro, RJ"
            totalJobs="1 vaga"
            salary="R$ 1.600"
            accessibily=""
          />
          <JobCard
            jobTitle="Engenheiro de Software"
            location="Rio de Janeiro, RJ"
            totalJobs="1 vaga"
            salary="R$ 7.000"
            accessibily="PCD"
          />
          <JobCard
            jobTitle="Desenvolvedor Web"
            location="São Paulo, SP"
            totalJobs="2 vagas"
            salary="R$ 2.400"
            accessibily="PCD"
          />
          <JobCard
            jobTitle="Desenvolvedor Back-End Pleno"
            location="São Paulo, SP"
            totalJobs="1 vaga"
            salary="R$ 2.600"
            accessibily=""
          />
          <JobCard
            jobTitle="Analista de Sistemas"
            location="Rio de Janeiro, RJ"
            totalJobs="3 vagas"
            salary="R$ 2.200"
            accessibily="PCD"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Jobs;
