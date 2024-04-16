import { Box, Button } from "@mui/material";
import headerImage from "../../../assets/cand-header.png";
import arrowRight from "../../../assets/icons/arrow-right.png";

const Header = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      margin={"auto"}
      maxWidth={"1280px"}
      className="header"
    >
      <Box
        width={"1280px"}
        display={"flex"}
        margin={"auto"}
        position={"relative"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          maxWidth={"700px"}
          marginTop={"100px"}
          zIndex={"1"}
        >
          <h1 className="title">
            Onde a <span style={{ color: "#1976D2" }}>diversidade</span> e a{" "}
            <span style={{ color: "#1976D2" }}> oportunidade</span> se
            encontram!
          </h1>
          <h3 className="subtitle">
            Explore como conectamos talentos diversos com empresas inovadoras
            que valorizam a inclusão. Junte-se a nós para criar um ambiente de
            trabalho mais diversificado e acolhedor.
          </h3>
          <Box>
            <Button variant="contained" href="#partners">
              Conheça as empresas
            </Button>
            <Button variant="text" href="#solutions">
              <img src={arrowRight} alt="Seta para a direita" width={"20px"} />
              Entenda mais
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        position={"absolute"}
        right={0}
        top={-60}
        zIndex={-1}
        className="headerImage"
      >
        <img
          src={headerImage}
          alt="Mulher negra com cabelos cacheados castanhos, sorrindo com a mão apoiada a cabeça e olhando na direção de papéis. Em cima da mesa temos café, cartolina enrolada de um projeto, notebook e alguns vasos de plantas."
        />
      </Box>
    </Box>
  );
};

export default Header;
