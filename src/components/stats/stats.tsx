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
      gap={"5px"}
    >
      <img src={image} alt="" width={"60px"} />
      <Typography variant="h2" fontWeight={"medium"} color={"#1976d2"}>
        + {numbers}
      </Typography>
      <Typography variant="h6">{resources}</Typography>
    </Box>
  );
};

export default Stats;
