import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logoCorpSolutions from "../../assets/logos/corp-solutions.png";
import logoInstragram from "../../assets/icons/logo-instagram.png";
import logoX from "../../assets/icons/logo-x.png";
import logoFacebook from "../../assets/icons/logo-facebook.png";
import logoYoutube from "../../assets/icons/logo-youtube.png";
import logoLinkedin from "../../assets/icons/logo-linkedin.png";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"#E0E1E6"}
      height={"125px"}
      marginTop={"100px"}
    >
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        gap={"20px"}
        width={"1280px"}
        className="footer"
      >
        <img
          src={logoCorpSolutions}
          alt="Logo da Corp Solutions"
          width={"126px"}
        />
        <Button
          variant="text"
          sx={{
            color: "#00000080",
            "&:hover": {
              bgcolor: "#00000010",
            },
          }}
          href="/"
        >
          Termos e Privacidade
        </Button>
        <Box display={"flex"} gap={"35px"}>
          <Link to={""}>
            <img src={logoInstragram} alt="Logo do Instagram" />
          </Link>
          <Link to={""}>
            <img src={logoX} alt="Logo do X" />
          </Link>
          <Link to={""}>
            <img src={logoFacebook} alt="Logo do Facebook" />
          </Link>
          <Link to={""}>
            <img src={logoYoutube} alt="Logo do YouTube" />
          </Link>
          <Link to={""}>
            <img src={logoLinkedin} alt="Logo do LinkedIn" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
