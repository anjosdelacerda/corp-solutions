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
      bgcolor={"#E0E1E6"}
      marginTop={"159px"}
      paddingTop={"45px"}
      paddingBottom={"45px"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"1280px"}
        gap={"20px"}
        className="stats-bar"
      >
        <Typography variant="h5">Alguns dos nossos números</Typography>
        <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
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
