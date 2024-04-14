import { Box, Typography } from "@mui/material";
import Card from "../../../components/card/card";
import cocaCola from "../../../assets/logos/cocacola.png";
import mcDonalds from "../../../assets/logos/mcdonalds.png";
import dropBox from "../../../assets/logos/dropbox.png";
import mitsubishi from "../../../assets/logos/mitsubishi.png";
import instagram from "../../../assets/logos/instagram.png";
import huawei from "../../../assets/logos/huawei.png";
import diamondMedal from "../../../assets/icons/medal-diamond.png";
import goldMedal from "../../../assets/icons/medal-gold.png";

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
          <Card
            image={cocaCola}
            company="Coca-Cola"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores
          amet similique odio incidunt cum iste a ad, vel adipisci illo hic
          optio? Corporis alias expedita ipsum, tempore excepturi nostrum."
            medal={diamondMedal}
            medalColor="Medalha de diamante"
            medalDescription="40% negros"
          />
          <Card
            image={mcDonalds}
            company="Mc Donalds"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores
          amet similique odio incidunt cum iste a ad, vel adipisci illo hic
          optio? Corporis alias expedita ipsum, tempore excepturi nostrum."
            medal={diamondMedal}
            medalColor="Medalha de diamante"
            medalDescription="30% LGBTs"
          />
          <Card
            image={dropBox}
            company="Dropbox"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores
          amet similique odio incidunt cum iste a ad, vel adipisci illo hic
          optio? Corporis alias expedita ipsum, tempore excepturi nostrum."
            medal={goldMedal}
            medalColor="Medalha de ouro"
            medalDescription="20% PCDS"
          />
          <Card
            image={mitsubishi}
            company="Mitsubishi"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores
          amet similique odio incidunt cum iste a ad, vel adipisci illo hic
          optio? Corporis alias expedita ipsum, tempore excepturi nostrum."
            medal={diamondMedal}
            medalColor="Medalha de diamante"
            medalDescription="40% negros"
          />
          <Card
            image={instagram}
            company="Instagram"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores
          amet similique odio incidunt cum iste a ad, vel adipisci illo hic
          optio? Corporis alias expedita ipsum, tempore excepturi nostrum."
            medal={goldMedal}
            medalColor="Medalha de ouro"
            medalDescription="20% PCDS"
          />
          <Card
            image={huawei}
            company="Huawei"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores
          amet similique odio incidunt cum iste a ad, vel adipisci illo hic
          optio? Corporis alias expedita ipsum, tempore excepturi nostrum."
            medal={diamondMedal}
            medalColor="Medalha de diamante"
            medalDescription="40% negros"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
