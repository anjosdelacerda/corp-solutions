import { Box, Button, Typography } from "@mui/material";
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
          <Typography variant="h2" fontWeight={"bold"}>
            Soluções com <span style={{ color: "#1976D2" }}>diversidade</span> e{" "}
            <span style={{ color: "#1976D2" }}>inclusão</span> para o seu RH
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            necessitatibus atque nihil nam ratione, pariatur amet dolorem ipsam
            dolorum numquam labore enim facere molestias impedit incidunt cumque
            quaerat earum. Tempora!
          </Typography>
          <Box>
            <Button variant="contained">Conheça as empresas</Button>
            <Button variant="text">
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
