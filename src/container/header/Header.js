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
                  <img src={logo} alt='Main Morpho Logo'/>
               </Link>
            </div>
            <div className=''>
                <ul className='flex gap-8'>
                  <li>
                    <Link to="/about">{t('header_nav1')}</Link>
                  </li>
                  <li>
                    <Link to="/services">{t('header_nav2')}</Link>
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
            <div className='flex gap-4'>
              <button onClick={() => changeLanguage('en')}>EN</button>
              <button onClick={() => changeLanguage('ru')}>RU</button>

              <button onClick={toggleFormBox} className='header__button' style={{marginLeft: '20px'}}>Get in touch</button>
            </div>
        </div>
    </header>
  );
}

export default Header;
