import { Box, Button, Typography } from "@mui/material";
import matchCand from "../../../assets/cand-match.png";

const Match = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      paddingTop={"100px"}
      className="match"
    >
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
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
          alignItems={"flex-start"}
          maxWidth={"580px"}
          gap={"10px"}
        >
          <Typography variant="h3" fontWeight={"bold"}>
            As <span style={{ color: "#1976D2" }}>vagas</span> com o match
            perfeito para você,{" "}
            <span style={{ color: "#1976D2" }}>candidato</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            necessitatibus atque nihil nam ratione, pariatur amet dolorem ipsam
            dolorum numquam labore enim facere molestias impedit incidunt cumque
            quaerat earum. Tempora!
          </Typography>
          <Button variant="contained">Quero ter acesso as vagas</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Match;
