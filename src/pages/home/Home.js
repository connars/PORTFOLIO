import "./home.scss";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Price from "../../components/price/Price";
import Works from "../../components/works/Works";
import Posts from "../../components/posts/Posts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Hero />
      <Services />
      <section className="home-text-sec">
        <div className="container flex flex-col">
          <div className="w-1/2 mt-32">
            <motion.p
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="subtitle ">Morpho Labs</motion.p>
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="title-black mb-4 mt-4">
              Development of websites and web applications
            </motion.h2>
            <motion.p
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Development of websites and web applications for lovers of he
              future Development and web applications forlovers of the future
              Deveopment of websites Developmens and web applications for lovers
              of the future Delopment of websites aweb applications for lovers
              of the future Development of websites and web applications for
              lovers of the future
            </motion.p>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="price-card__button mt-8"
            >
              <svg
                width="29"
                height="27"
                viewBox="0 0 29 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="14.9964"
                  width="3.74911"
                  height="28.9384"
                  transform="rotate(-90 0 14.9964)"
                  fill="#324746"
                />
                <rect
                  x="21.793"
                  y="11.2473"
                  width="3.74911"
                  height="3.74911"
                  transform="rotate(-90 21.793 11.2473)"
                  fill="#324746"
                />
                <rect
                  x="25.541"
                  y="18.7456"
                  width="3.74911"
                  height="3.74911"
                  transform="rotate(180 25.541 18.7456)"
                  fill="#324746"
                />
                <rect
                  x="18.043"
                  y="7.49823"
                  width="3.74911"
                  height="3.74911"
                  transform="rotate(-90 18.043 7.49823)"
                  fill="#324746"
                />
                <rect
                  x="21.793"
                  y="22.4947"
                  width="3.74911"
                  height="3.74911"
                  transform="rotate(180 21.793 22.4947)"
                  fill="#324746"
                />
                <rect
                  x="14.2949"
                  y="3.74911"
                  width="3.74911"
                  height="3.74911"
                  transform="rotate(-90 14.2949 3.74911)"
                  fill="#324746"
                />
                <rect
                  x="18.043"
                  y="26.2438"
                  width="3.74911"
                  height="3.74911"
                  transform="rotate(180 18.043 26.2438)"
                  fill="#324746"
                />
              </svg>
              <span className="ml-4">Get In Touch</span>
            </motion.div>
          </div>
        </div>
      </section>
      <motion.section
        id="tech"
        className="tech"
      ></motion.section>
      <Works />
      <Price />
      <Posts />
      {/* <Hero />
      <Hero /> */}
    </>
  );
}

export default Home;
