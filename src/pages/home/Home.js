import "./home.scss";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Price from "../../components/price/Price";
import Works from "../../components/works/Works";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <section className="home-text-sec">
          <div className="container flex flex-col">
            <div className="w-1/2 mt-32">
              <p className="subtitle ">Morpho Labs</p>
                <h2 className="title-black mb-4 mt-4">Development of websites and web applications</h2>
                <p>
                  Development of websites and web applications for lovers of he future Development 
                  and web applications forlovers of the future Deveopment of websites  Developmens 
                  and web applications for lovers of the future Delopment of websites aweb applications 
                  for lovers of the future Development of websites and web applications for lovers of 
                  the future
                </p>
            </div>
          </div>
      </section>
      <section id="tech" className="tech">

      </section>
      <Works />
      <Price />
      {/* <Hero />
      <Hero /> */}
    </>
  );
}


export default Home;
