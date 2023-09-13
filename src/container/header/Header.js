import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from './../../assets/images/main-logo.svg'
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const headerClass = `header fixed ${isScrolled ? 'is-scrolled' : ''}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  function toggleFormBox() {
    const formBox = document.querySelector('.form__box');
  
    if (formBox) {
      formBox.classList.toggle('active');
    }
  }

  return (
    <header className={headerClass}>
        <div className='container header__container flex flex-wrap justify-between items-center'>
            <div className='header__center'>
               <Link to='/'>
               <svg width="194" height="42" viewBox="0 0 194 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 35 20.3886)" fill="#324746"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 7 20.3886)" fill="#324746"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 42 20.3886)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 0 20.3886)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 35 13.3032)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 35 34.3032)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 7 34.3032)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 7 13.3032)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 35.3027 20.4772)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 35.3027 7.4772)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 35.3027 27.4772)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 35.3027 13.4772)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 35.3027 41.4772)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 35.3027 34.4772)" fill="#324746"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 35 7.30331)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 35 27.3033)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 7 27.3033)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1 8.74228e-08 8.74228e-08 -1 7 7.30331)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 28.3027 20.4771)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 28.3027 7.47714)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 28.3027 27.4771)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 28.3027 13.4771)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 28.3027 41.4771)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 28.3027 34.4771)" fill="#324746"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 21.3027 20.4771)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 21.3027 7.47714)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 21.3027 27.4771)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 21.3027 13.4771)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 21.3027 41.4771)" fill="#FDB920"/>
                    <rect width="7.47714" height="7.30326" transform="matrix(1.06977e-07 -1 -1 -1.06977e-07 21.3027 34.4771)" fill="#324746"/>
                    <path d="M68.08 23.34V28H65.28V18H67.78L68.04 19.58C68.88 18.42 70.14 17.7 71.62 17.7C73.6 17.7 75.18 18.78 75.98 20.54C76.76 18.8 78.26 17.7 80.1 17.7C82.98 17.7 85.04 20 85.04 23.34V28H82.24V23.34C82.24 21.54 81.06 20.28 79.38 20.28C77.7 20.28 76.56 21.54 76.56 23.34V28H73.76V23.34C73.76 21.54 72.58 20.28 70.9 20.28C69.22 20.28 68.08 21.54 68.08 23.34ZM86.9452 23.02C86.9452 19.96 89.5452 17.7 93.0652 17.7C96.6252 17.7 99.2052 19.84 99.2052 23.02C99.2052 26.14 96.6252 28.3 93.0652 28.3C89.5652 28.3 86.9452 26.04 86.9452 23.02ZM89.7452 23.02C89.7452 24.58 91.1652 25.7 93.0652 25.7C95.0652 25.7 96.4052 24.58 96.4052 23.02C96.4052 21.42 95.0652 20.28 93.0652 20.28C91.1452 20.28 89.7452 21.42 89.7452 23.02ZM108.659 17.7V20.66C105.679 20.66 103.939 22.36 103.939 25.16V28H101.139V18H103.639L103.939 20.6C104.859 18.82 106.519 17.7 108.659 17.7ZM110.397 18H112.897L113.157 19.28C114.177 18.28 115.637 17.7 117.317 17.7C120.637 17.7 123.137 19.96 123.137 22.98C123.137 26.04 120.657 28.3 117.317 28.3C115.657 28.3 114.217 27.74 113.197 26.74V32H110.397V18ZM120.337 22.98C120.337 21.34 118.817 20.16 116.717 20.16C114.617 20.16 113.197 21.32 113.197 22.98C113.197 24.66 114.617 25.82 116.717 25.82C118.857 25.82 120.337 24.62 120.337 22.98ZM127.904 23.34V28H125.104V14H127.904V19.62C128.784 18.42 130.104 17.7 131.644 17.7C134.644 17.7 136.744 20 136.744 23.34V28H133.944V23.34C133.944 21.54 132.664 20.28 130.884 20.28C129.104 20.28 127.904 21.54 127.904 23.34ZM138.644 23.02C138.644 19.96 141.244 17.7 144.764 17.7C148.324 17.7 150.904 19.84 150.904 23.02C150.904 26.14 148.324 28.3 144.764 28.3C141.264 28.3 138.644 26.04 138.644 23.02ZM141.444 23.02C141.444 24.58 142.864 25.7 144.764 25.7C146.764 25.7 148.104 24.58 148.104 23.02C148.104 21.42 146.764 20.28 144.764 20.28C142.844 20.28 141.444 21.42 141.444 23.02ZM160.639 14V28H157.839V14H160.639ZM175.291 28H172.811L172.531 26.68C171.511 27.7 170.051 28.3 168.351 28.3C165.031 28.3 162.531 26.04 162.531 23.02C162.531 19.96 165.011 17.7 168.351 17.7C170.031 17.7 171.511 18.28 172.531 19.32L172.811 18H175.291V28ZM165.331 23.02C165.331 24.64 166.851 25.82 168.951 25.82C171.071 25.82 172.491 24.68 172.491 23.02C172.491 21.34 171.051 20.16 168.951 20.16C166.851 20.16 165.331 21.36 165.331 23.02ZM180.618 26.7L180.358 28H177.858V14H180.658V19.26C181.678 18.26 183.118 17.7 184.778 17.7C188.118 17.7 190.598 19.96 190.598 23.02C190.598 26.04 188.098 28.3 184.778 28.3C183.098 28.3 181.638 27.72 180.618 26.7ZM187.798 23.02C187.798 21.36 186.318 20.16 184.178 20.16C182.078 20.16 180.658 21.34 180.658 23.02C180.658 24.68 182.078 25.82 184.178 25.82C186.278 25.82 187.798 24.64 187.798 23.02Z" fill="white"/>
                  </svg>
               </Link>
            </div>
            <div className=''>
                <ul className='flex gap-12'>
                  <li>
                    <Link to="/about">{t('header_nav1')}</Link>
                  </li>
                  <li>
                    <a href="/#services">{t('header_nav2')}</a>
                  </li>
                  <li>
                    <Link to="/works">{t('header_nav3')}</Link>
                  </li>
                  <li>
                    <Link to="/contacts">{t('header_nav4')}</Link>
                  </li>
                  <li>
                    <Link to="/blog">{t('header_nav5')}</Link>
                  </li>
                </ul>
            </div>
            <div className='header-lang flex gap-4'>
              <button onClick={() => changeLanguage('en')}>EN</button>
              <button onClick={() => changeLanguage('ru')}>RU</button>

              <button onClick={toggleFormBox} className='header__button' style={{marginLeft: '20px'}}>Get in touch</button>
            </div>
        </div>
    </header>
  );
}

export default Header;
