// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './../locales/en.json'; // Загрузите файлы переводов
import ruTranslation from './../locales/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    lng: 'en', // Установите язык по умолчанию
    fallbackLng: 'ru', // Язык, который будет использоваться, если перевод не найден
    interpolation: {
      escapeValue: false, // Не обязательно
    },
  });

export default i18n;