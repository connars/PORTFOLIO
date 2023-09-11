import "./hero.scss";
import heroimg from './../../assets/images/bg.png'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';


function Hero() {
    const { t } = useTranslation();

    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.2, 
    });

    const animationVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    const animationVariants2 = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
        transition:{
            type: "spring",
            stiffness: 260,
            damping: 20
          }
    };
    
    return (
        <section id="hero" className="hero">
            <div className="container hero__container">
                <div className="hero__inner">
                    <div className="hero__left" style={{width: '50%'}}>
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
                            {t('hello')}
                        </motion.div>
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
                            className="mt-6"
                        >
                            <p className="hero__inner-text" dangerouslySetInnerHTML={{ __html: t('deskr') }} />
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={animationVariants2}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className="hero__button mt-10"
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
                    <div className="hero__right" style={{width: '50%'}}>
                         <img src={heroimg} alt="Hero"/>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default Hero;
