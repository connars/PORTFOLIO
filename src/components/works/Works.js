import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import "./works.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import work1 from './../../assets/images/works/1.png'

function Works() {

    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.2,
    });
    
    const animationVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="works" className="works">
            <div className="works__container container flex gap-20 mt-16">
                <div className='works__left'>
                    <div className="swiper__wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next1',
                                prevEl: '.swiper-button-prev1',
                            }}
                        >
                            <SwiperSlide >
                                <div className="work">
                                   <img src={work1} />
                                   <p>Work 1</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="work">
                                    <img src={work1} />
                                    <p>Work 2</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="work">
                                    <img src={work1} />
                                    <p>Work 3</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="work">
                                    <img src={work1} />
                                    <p>Work 4</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="work">
                                    <img src={work1} />
                                    <p>Work 5</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="work">
                                    <img src={work1} />
                                    <p>Work 6</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div>
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
                    >
                        <h3 className="subtitle">
                            Recent works
                        </h3>
                        <h3 className="title-black mt-4">
                            Development of websites and web applications
                        </h3>
                        <p className="mt-6">
                            Development of websites and web applications 
                            for lovers of he future Development  and 
                            web applications forlovers of the future 
                            Deveopment of websites  Developmens and web 
                            applications for lovers of the future Delopment 
                            of websites aweb applications for lovers of the 
                            future Development of websites and web applications 
                            for lovers of the future
                        </p>
                        <p className='about-bold mt-4'>
                            Development of websites and web applications
                        </p>
                    </motion.div>
                     <div className="swiper-buttons flex gap-6 mt-10">
                        <div className="swiper-button swiper-button-prev1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
                                <rect x="32" y="12.4373" width="4.14575" height="32" transform="rotate(90 32 12.4373)" fill="#FDB920"/>
                                <rect x="7.90234" y="16.583" width="4.14575" height="4.14575" transform="rotate(90 7.90234 16.583)" fill="#FDB920"/>
                                <rect x="3.75781" y="8.2915" width="4.14575" height="4.14575" fill="#FDB920"/>
                                <rect x="12.0488" y="20.7288" width="4.14575" height="4.14575" transform="rotate(90 12.0488 20.7288)" fill="#FDB920"/>
                                <rect x="7.90234" y="4.14575" width="4.14575" height="4.14575" fill="#FDB920"/>
                                <rect x="16.1934" y="24.8745" width="4.14575" height="4.14575" transform="rotate(90 16.1934 24.8745)" fill="#FDB920"/>
                                <rect x="12.0488" width="4.14575" height="4.14575" fill="#FDB920"/>
                            </svg>
                        </div>
                        <div className="swiper-button swiper-button-next1">
                            <svg style={{transform: 'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
                                <rect x="32" y="12.4373" width="4.14575" height="32" transform="rotate(90 32 12.4373)" fill="#FDB920"/>
                                <rect x="7.90234" y="16.583" width="4.14575" height="4.14575" transform="rotate(90 7.90234 16.583)" fill="#FDB920"/>
                                <rect x="3.75781" y="8.2915" width="4.14575" height="4.14575" fill="#FDB920"/>
                                <rect x="12.0488" y="20.7288" width="4.14575" height="4.14575" transform="rotate(90 12.0488 20.7288)" fill="#FDB920"/>
                                <rect x="7.90234" y="4.14575" width="4.14575" height="4.14575" fill="#FDB920"/>
                                <rect x="16.1934" y="24.8745" width="4.14575" height="4.14575" transform="rotate(90 16.1934 24.8745)" fill="#FDB920"/>
                                <rect x="12.0488" width="4.14575" height="4.14575" fill="#FDB920"/>
                            </svg>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    );
}


export default Works;
