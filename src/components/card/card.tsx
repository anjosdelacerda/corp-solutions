import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IMedal {
  medal: string;
  medalColor: string;
  medalDescription: string;
}

interface IList {
  image: string;
  company: string;
  description: string;
  medals: IMedal[];
}

interface ICard {
  list: IList[];
}

const Card = ({ list }: ICard) => {
  return (
    <>
      {list.map((item, index) => (
        <Box
          width={"292px"}
          minHeight={"440px"}
          sx={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"35px"}
          gap={"30px"}
          key={index}
        >
          <img src={item.image} alt={item.company} />
          <Typography variant="body2" gutterBottom>
            {item.description}
          </Typography>
          <Box display={"flex"} gap={"30px"}>
            {item.medals.map((medal, medalIndex) => (
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                key={medalIndex}
              >
                <img
                  src={medal.medal}
                  alt={medal.medalColor}
                  width={"80px"}
                  height={"80px"}
                />
                <Typography variant="overline" gutterBottom>
                  {medal.medalDescription}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Card;
