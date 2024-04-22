import { useEffect, useState } from "react"
import Footer from "../../layout/footer/footer"
import CakeIcon from "@mui/icons-material/Cake"
import PlaceIcon from "@mui/icons-material/Place"
import AccessibleIcon from "@mui/icons-material/Accessible"
import WcIcon from "@mui/icons-material/Wc"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PeopleIcon from "@mui/icons-material/People"
import { styled } from "@mui/system"
import {
  Box,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
} from "@mui/material"
import logoCorpSolutions from "../../assets/logos/corp-solutions.png"
import TextField from "@mui/material/TextField"

import "./TalentPool.css"
import { Link } from "react-router-dom"
import { Search } from "@mui/icons-material"
import FieldText from "../../components/input/fieldText"

const Info = styled("p")({
  display: "flex",
  alignItems: "flex-end",
  color: "rgba(0, 0, 0, 0.6)",
  textTransform: "capitalize",
  margin: "0",
  padding: "5px",
  "& svg": {
    marginRight: "5px",
  },
})

const CardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  width: "604px",
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  borderRadius: "4px",
  //   "@media (max-width:600px)": {
  //     height: "100%",
  //   },
})

const BotaoCard = styled(Button)({
  marginTop: "auto",
  width: "100%",
  backgroundColor: "rgb(25, 118, 210)",
})

const Botao = styled(Button)({
  display: "block",
  margin: "auto",
  marginTop: "50px",
  padding: "10px 20px",
  borderColor: "rgba(33, 150, 243, 0.5)",
  color: "rgba(33, 150, 243, 1)",
})

const NavBanco = () => {
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
        direction="row"
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        spacing={0}
        sx={{
          "@media (max-width:800px)": {
            marginTop: "20px",
          },
        }}
      >
        <TextField
          id="outlined-basic"
          label="Pesquisar Candidato"
          variant="outlined"
          size="small"
        />
        <Button variant="contained" sx={{ height: "39px" }}>
          Pesquisar
        </Button>
      </Stack>
    </Box>
  )
}

type Dado = {
  nome: string
  idade: number
  cidade: string
  deficiencia: string
  genero: string
  orientacao: string
  etnia: string
  descricao: string
}

const TalentPool = () => {
  const handleSearch = () => {
    console.log("Pesquisa realizada")
  }

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const [dados, setDados] = useState<Dado[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/dados")
      .then((response) => response.json())
      .then((data) => setDados(data))
  }, [])
  return (
    <div>
      {/* <NavBanco></NavBanco> */}

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

      <div>
        <div className="container">
          <div className="talent-pool">
            <h1>Banco de Talentos</h1>
            <p className="DescriptionText">
              Conheça alguns dos talentos que estão disponíveis para o mercado
              de trabalho
            </p>
          </div>
          <div className="cardsContent">
            {dados.map((dado, index) => {
              const limiteCaracteres = dado.deficiencia ? 150 : 250

              return (
                <CardContainer key={index} className="card">
                  <h2>{dado.nome}</h2>
                  <div className="informacoes">
                    <Info>
                      <CakeIcon sx={{ color: "#00000040;" }} /> {dado.idade}{" "}
                      anos
                    </Info>
                    <Info>
                      <PlaceIcon sx={{ color: "#00000040;" }} /> {dado.cidade}
                    </Info>
                    {dado.deficiencia ? (
                      <Info>
                        <AccessibleIcon sx={{ color: "#00000040;" }} />{" "}
                        {dado.deficiencia}
                      </Info>
                    ) : null}{" "}
                    {/*se não tiver deficiência, não exibe*/}
                    <Info>
                      <WcIcon sx={{ color: "#00000040;" }} /> {dado.genero}
                    </Info>
                    <Info>
                      <FavoriteIcon sx={{ color: "#00000040;" }} />{" "}
                      {dado.orientacao}
                    </Info>
                    <Info>
                      <PeopleIcon sx={{ color: "#00000040;" }} /> {dado.etnia}
                    </Info>
                  </div>
                  <p className="descriptionUser">
                    {dado.descricao.length > limiteCaracteres
                      ? `${dado.descricao
                          .substring(0, limiteCaracteres)
                          .replace(/\W$/, "")}...`
                      : dado.descricao}
                  </p>
                  <BotaoCard variant="contained">Ver Perfil</BotaoCard>
                </CardContainer>
              )
            })}
          </div>
        </div>
        <div>
          <Botao variant="outlined">Ver Mais</Botao>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default TalentPool
