import { Box, Typography } from "@mui/material";
import Stats from "../../../components/stats/stats";
import users from "../../../assets/icons/users.png";
import arrowTopRight from "../../../assets/icons/arrow-top-right.png";
import web from "../../../assets/icons/web.png";

const StatsBar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      marginTop={"36px"}
      paddingTop={"45px"}
      paddingBottom={"45px"}
      sx={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(224,225,230,1) 100%, rgba(224,225,230,1) 100%)",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        width={"1280px"}
        gap={"20px"}
        className="stats-bar"
      >
        <Typography variant="h5">Alguns dos nossos números</Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={"80px"}
        >
          <Stats image={users} numbers={"150"} resources="empresas parceiras" />
          <Stats
            image={arrowTopRight}
            numbers={"5.000"}
            resources="vagas anunciadas"
          />
          <Stats
            image={web}
            numbers={"10.000"}
            resources="candidatos cadastrados"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StatsBar;
