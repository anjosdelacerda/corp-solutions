import { Box, Button, Typography } from "@mui/material";
import matchCand from "../../../assets/cand-match.png";

const Match = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} paddingTop={"100px"}>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"1280px"}
        className="match"
      >
        <img
          src={matchCand}
          alt="Imagem ilustrativa do portal do candidato"
          width={"604px"}
          className="section-image"
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={"580px"}
          gap={"10px"}
        >
          <Typography variant="h3" fontWeight={"bold"}>
            As <span style={{ color: "#1976D2" }}>vagas</span> com o match
            perfeito para você,{" "}
            <span style={{ color: "#1976D2" }}>candidato</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Cadastre-se agora e explore oportunidades alinhadas a sua carreira.
            Aproveite um processo de registro simples e intuitivo, com acesso a
            vagas em diferentes setores. Seja parte de nossa comunidade de
            talentos e aproveite dicas e recursos exclusivos. Não perca tempo,
            cadastre-se agora e descubra oportunidades ilimitadas para sua
            carreira!
          </Typography>
          <Button variant="contained" href="/register">
            Quero ter acesso as vagas
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Match;
