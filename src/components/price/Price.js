import "./price.scss";

import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';


function Price() {

    function toggleFormBox() {
        const formBox = document.querySelector('.form__box');
      
        if (formBox) {
          formBox.classList.toggle('active');
        }
      }
  

    const priceCards = [
        {
            title: 'Landing',
            price: 'from ~700$',
            text: 'Development of websites and web applications for lovers of he future'
        },
        {
            title: 'Landing',
            price: 'from ~700$',
            text: 'Development of websites and web applications for lovers of he future'
        },
        {
            title: 'Landing',
            price: 'from ~700$',
            text: 'Development of websites and web applications for lovers of he future'
        },
        {
            title: 'Landing',
            price: 'from ~700$',
            text: 'Development of websites and web applications for lovers of he future'
        },
        {
            title: 'Landing',
            price: 'from ~700$',
            text: 'Development of websites and web applications for lovers of he future'
        },
        {
            title: 'Landing',
            price: 'from ~700$',
            text: 'Development of websites and web applications for lovers of he future'
        },
    ]

    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.2,
    });
    
    const animationVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };
    

    return (
        <section id="price" className="price">
            <div className="container mt-16 mb-16">
                <div className="price__title flex justify-center w-full">
                    <h2 className="title-black mb-16">Price</h2>
                </div>
                <div className="price-cards grid grid-cols-3 gap-8">
                    {priceCards.map((card, index) => (
                        <motion.div 
                            key={index}
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={animationVariants}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className="price-card p-8 flex flex-col gap-3 items-start"
                        >
                            <h3 className="price-card__title">{card.title}</h3>
                            <p className="price-card__price">{card.price}</p>
                            <p className="price-card__text">{card.text}</p>
                            <div onClick={toggleFormBox} className="price-card__button">
                                <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="14.9964" width="3.74911" height="28.9384" transform="rotate(-90 0 14.9964)" fill="#324746"/>
                                    <rect x="21.793" y="11.2473" width="3.74911" height="3.74911" transform="rotate(-90 21.793 11.2473)" fill="#324746"/>
                                    <rect x="25.541" y="18.7456" width="3.74911" height="3.74911" transform="rotate(180 25.541 18.7456)" fill="#324746"/>
                                    <rect x="18.043" y="7.49823" width="3.74911" height="3.74911" transform="rotate(-90 18.043 7.49823)" fill="#324746"/>
                                    <rect x="21.793" y="22.4947" width="3.74911" height="3.74911" transform="rotate(180 21.793 22.4947)" fill="#324746"/>
                                    <rect x="14.2949" y="3.74911" width="3.74911" height="3.74911" transform="rotate(-90 14.2949 3.74911)" fill="#324746"/>
                                    <rect x="18.043" y="26.2438" width="3.74911" height="3.74911" transform="rotate(180 18.043 26.2438)" fill="#324746"/>
                                </svg>
                                <span className="ml-4">
                                    Get In Touch
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Price;
