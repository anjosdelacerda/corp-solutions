import Footer from "../../layout/footer/footer";
import Nav from "../../layout/nav/nav";
import Header from "../../layout/sections/header/header";
import Match from "../../layout/sections/match/match";
import Partners from "../../layout/sections/partners/partners";
import Solutions from "../../layout/sections/solutions/solutions";
import StatsBar from "../../layout/sections/stats-bar/statsBar";
import "./home.css";

const HomePagina = () => {
  return (
    <>
      <Nav />
      <Header />
      <StatsBar />
      <Solutions />
      <Match />
      <Partners />
      <Footer />
    </>
  );
};
export default HomePagina;
