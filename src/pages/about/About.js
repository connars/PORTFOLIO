import "./about.scss";
import heroimg from './../../assets/images/about-bg1.png'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import icon from './../../assets/images/about-icon.svg'
import bid_logo from './../../assets/images/logo-lined.svg'
import kit from './../../assets/images/kit.svg'
import Price from "../../components/price/Price";

function About() {

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
       <section id="hero" className="hero about__hero">
            <div className="container hero__container">
                <div className="hero__inner" style={{width:'100%',justifyContent: "space-between"}}>
                    <div className="hero__left">
                        <motion.div 
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={animationVariants}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20
                          }}
                            className="title"
                        >
                            About Morpho Lab
                        </motion.div>
                        {/* <div className="mt-6">
                            <p className="hero__inner-text">
                                Count <span className="acsent">pacman</span> on the site and get -10% of the check
                            </p>
                        </div> */}
                        <motion.div
                            className="hero__button mt-10"
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={animationVariants}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20
                          }}
                        >
                            <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="14.9964" width="3.74911" height="28.9384" transform="rotate(-90 0 14.9964)" fill="#324746"/>
                                <rect x="21.793" y="11.2473" width="3.74911" height="3.74911" transform="rotate(-90 21.793 11.2473)" fill="#324746"/>
                                <rect x="25.541" y="18.7456" width="3.74911" height="3.74911" transform="rotate(180 25.541 18.7456)" fill="#324746"/>
                                <rect x="18.043" y="7.49823" width="3.74911" height="3.74911" transform="rotate(-90 18.043 7.49823)" fill="#324746"/>
                                <rect x="21.793" y="22.4947" width="3.74911" height="3.74911" transform="rotate(180 21.793 22.4947)" fill="#324746"/>
                                <rect x="14.2949" y="3.74911" width="3.74911" height="3.74911" transform="rotate(-90 14.2949 3.74911)" fill="#324746"/>
                                <rect x="18.043" y="26.2438" width="3.74911" height="3.74911" transform="rotate(180 18.043 26.2438)" fill="#324746"/>
                            </svg>
                        </motion.div>
                    </div>
                    <div className="hero__right">
                         <img src={heroimg} alt="Hero"/>
                    </div>
                </div>

            </div>
      </section>
      <section className="about" style={{height: '700px'}}>
         <div className="container">
            <div className="flex wrap gap-10 mt-20">
              <div className="" style={{width: '50%'}}>
                  <img src={icon} className="stats__item-icon" />
                  <h4 className="title-black mt-8">About</h4>
                  <p className="mt-6 about-bold">
                    Development of websites and web applications
                  </p>
                  <p className="mt-6">
                    Development of websites and web applications for lovers 
                    of he future Development  and web applications forlovers 
                    of the future Deveopment of websites  Developmens and web
                    applications for lovers of the future Delopment of 
                    websites aweb applications for lovers of the future
                    Development of websites and web applications 
                    for lovers of the future
                  </p>
                  <p className="mt-6 about-bold">
                    Development of websites and web applications for lovers of 
                    he future Development  and web applications forlovers 
                    of the future 
                  </p>
              </div>
              <div className="flex justify-center" style={{width: '50%'}}>
                <img src={kit} alt="Big logo"/>
              </div>
            </div>
         </div>
      </section>
      <section className="about">
         <div className="container flex wrap gap-10 mt-20">
            <div className="flex justify-center" style={{width: '50%'}}>
              <img src={bid_logo} alt="Big logo"/>
            </div>
            <div style={{width: '50%'}}>
               <p className="subtitle">
                  Recent works
               </p>
               <h2 className="title-black mt-4">
                  Development 
               </h2>
               <p className="mt-4">
                  Development of websites and web applications for lovers of he future Development  and web applications forlovers of the future Deveopment  for lovers of the future
               </p>
            </div>
         </div>
      </section>
      <section id="stats" className="stats mt-20 mb-20">
          <div className="stats__container container">
            <div className="stats__contant">
                <div className="stats__item">
                  <img src={icon} className="stats__item-icon" />
                  <h4 className="stats__item-stat">4</h4>
                  <p className="stats__item-text">Development of websites</p>
                </div>
                <div className="divider"></div>
                <div className="stats__item">
                  <img src={icon} className="stats__item-icon" />
                  <h4 className="stats__item-stat">104</h4>
                  <p className="stats__item-text">Development of websites</p>
                </div>
                <div className="divider"></div>
                <div className="stats__item">
                  <img src={icon} className="stats__item-icon" />
                  <h4 className="stats__item-stat">56</h4>
                  <p className="stats__item-text">Development of websites</p>
                </div>
                <div className="divider"></div>
                <div className="stats__item">
                  <img src={icon} className="stats__item-icon" />
                  <h4 className="stats__item-stat">98%</h4>
                  <p className="stats__item-text">Development of websites</p>
                </div>
            </div>
          </div>
      </section>
      <Price />
    </>
  );
}


export default About;
