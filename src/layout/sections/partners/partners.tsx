import { Box, Typography } from "@mui/material";
import Card from "../../../components/card/card";
import { partnersList } from "./partnersList";

const Partners = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      paddingTop={"100px"}
      id="partners"
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        textAlign={"center"}
        gap={"86px"}
        width={"1280px"}
      >
        <Typography variant="h3" fontWeight={"bold"}>
          Conheça alguns dos nossos{" "}
          <span style={{ color: "#1976D2" }}>parceiros</span>
        </Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={"60px"}
        >
          <Card list={partnersList} />
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
