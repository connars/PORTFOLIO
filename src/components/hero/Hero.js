import "./hero.scss";
import hero_bg from './../../assets/videos/hero.mp4'

import Header from "../../container/header/Header";

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero__wrapper">
                <video autoPlay loop muted playsInline src={hero_bg}></video>
                <div className="hero__contant">
                    <div className="hero__top">
                        <Header />
                    </div>
                    <div className="hero__center">
                        <h2 className="title">
                            Digital Agency
                        </h2>
                    </div>
                    <div className="hero__bottom">
                        <div className="hero__bottom-left">
                            <div className="hero__bottom-left-card">
                                <h3 className="title">
                                    100+ projects
                                </h3>
                                <p>
                                    Ты знаешь как сука сложно выучить елементор???
                                </p>
                            </div>
                        </div>
                        <div className="hero__bottom-right">
                            <div className="hero__bottom-right-arrow">
                                <div className="hero__arrow">

                                </div>
                            </div>
                            <div className="hero__bottom-right-button">
                                <a href="#">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}


export default Hero;
