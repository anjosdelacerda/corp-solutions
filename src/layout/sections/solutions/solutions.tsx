import { Box, Typography } from "@mui/material";
import arrowRight from "../../../assets/icons/arrow-right.png";
import candWeb from "../../../assets/cand-area.png";

const Solutions = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} paddingTop={"100px"}>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={"20px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"1280px"}
        id="solutions"
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
            Com uma abordagem personalizada e focada em suas necessidades,
            garantimos a seleção dos profissionais mais qualificados e alinhados
            com sua cultura organizacional. Nossa experiência em recrutamento e
            seleção permite identificar talentos que se destacarão em suas
            vagas. Conte com nossa equipe dedicada para otimizar seu processo de
            contratação e garantir o sucesso de sua equipe. Conheça como podemos
            transformar a maneira como você recruta e encontre os talentos
            certos para impulsionar o futuro da sua empresa.
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
