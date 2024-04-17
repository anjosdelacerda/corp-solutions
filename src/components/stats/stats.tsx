import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IStats {
  image: string;
  numbers: string;
  resources: string;
}

const Stats = ({ image, numbers, resources }: IStats) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      // gap={"5px"}
    >
      <img
        src={image}
        alt="Ícones"
        width={"50px"}
        style={{ marginBottom: "10px" }}
      />
      <Typography variant="h3" fontWeight={"medium"} color={"#1976d2"}>
        + {numbers}
      </Typography>
      <Typography variant="subtitle1" style={{ lineHeight: 1 }}>
        {resources}
      </Typography>
    </Box>
  );
};

export default Stats;
