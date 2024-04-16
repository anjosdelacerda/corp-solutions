import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ICard {
  image: string;
  company: string;
  description: string;
  medal: string;
  medalColor: string;
  medalDescription: string;
}

const Card = ({
  image,
  company,
  description,
  medal,
  medalColor,
  medalDescription,
}: ICard) => {
  return (
    <Box
      width={"292px"}
      sx={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      padding={"35px"}
      gap={"35px"}
    >
      <img src={image} alt={company} />
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <Box display={"flex"} gap={"10px"}>
        <Box display={"flex"} flexDirection={"column"}>
          <img src={medal} alt={medalColor} width={"80px"} height={"80px"} />
          <Typography variant="overline" gutterBottom>
            {medalDescription}
          </Typography>
        </Box>
        {/* <Box display={"flex"} flexDirection={"column"}>
          <img src={medal} alt={medalColor} width={"80px"} height={"80px"} />
          <Typography variant="overline" gutterBottom>
            {medalDescription}
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Card;
