import "./home.scss";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Price from "../../components/price/Price";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Price />
      <Hero />
      <Hero />
    </>
  );
}


export default Home;
