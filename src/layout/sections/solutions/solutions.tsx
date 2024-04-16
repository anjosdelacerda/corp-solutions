import { Box, Typography } from "@mui/material";
import arrowRight from "../../../assets/icons/arrow-right.png";
import candWeb from "../../../assets/cand-area.png";

const Solutions = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      paddingTop={"100px"}
      id="solutions"
    >
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={"20px"}
        justifyContent={"space-between"}
        width={"1280px"}
        className="solutions"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={"580px"}
          gap={"10px"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <img
              src={arrowRight}
              alt="Seta apontada para a direita"
              width={"38px"}
            />
            <Typography
              variant="overline"
              display="block"
              color={"#80828D"}
              fontWeight={"medium"}
              fontSize={"18px"}
            >
              Conheça nossas soluções
            </Typography>
          </Box>
          <Typography variant="h3" fontWeight={"bold"}>
            Sua <span style={{ color: "#1976D2" }}>empresa</span> encontra os
            candidatos <span style={{ color: "#1976D2" }}>ideias</span> para
            suas vagas
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            necessitatibus atque nihil nam ratione, pariatur amet dolorem ipsam
            dolorum numquam labore enim facere molestias impedit incidunt cumque
            quaerat earum. Tempora!
          </Typography>
        </Box>
        <img
          src={candWeb}
          alt="Imagem ilustrativa do portal do candidato"
          width={"608px"}
          className="section-image"
        />
      </Box>
    </Box>
  );
};

export default Solutions;
