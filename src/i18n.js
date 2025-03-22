import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        title: "I'm Orhan,\na Frontend Developer",
        subtitle: "I build responsive and user-friendly interfaces using React, JavaScript, HTML and CSS."
      }
,      
      navbar: {
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },
      about: {
        title: "About Me",
        description:
          "Hi, I'm Orhan. I'm a Frontend Developer with a background in education. I love building user-friendly interfaces using React, JavaScript, HTML and CSS."
      },
      projects: {
        title: "My Projects",
        view: "View Project",
        list: [
          {
            title: "Portfolio Website",
            description: "A personal portfolio website built with React and Bootstrap.",
            link: "https://github.com/orhan-yilmaz/portfolio"
          },
          {
            title: "Weather App",
            description: "A weather forecast app using an open weather API.",
            link: "https://github.com/orhan-yilmaz/weather-app"
          }
        ]
      },
      contact: {
        title: "Contact Me",
        name: "Name",
        namePlaceholder: "Enter your name",
        email: "Email",
        emailPlaceholder: "Enter your email",
        message: "Message",
        messagePlaceholder: "Write your message",
        submit: "Send Message",
        alert: "Your message has been sent (demo alert)."
      }
    }
  },
  de: {
    translation: {
      hero: {
        title: "Ich bin Orhan,\nein Frontend-Entwickler",
        subtitle: "Ich entwickle benutzerfreundliche und responsive Benutzeroberflächen mit React, JavaScript, HTML und CSS."
      }
,      
      navbar: {
        about: "Über mich",
        projects: "Projekte",
        contact: "Kontakt"
      },
      about: {
        title: "Über mich",
        description:
          "Hallo, ich bin Orhan. Ich bin ein Frontend-Entwickler mit pädagogischem Hintergrund. Ich liebe es, benutzerfreundliche Oberflächen mit React, JavaScript, HTML und CSS zu erstellen."
      },
      projects: {
        title: "Meine Projekte",
        view: "Projekt ansehen",
        list: [
          {
            title: "Portfolio-Website",
            description: "Eine persönliche Portfolio-Website mit React und Bootstrap.",
            link: "https://github.com/orhan-yilmaz/portfolio"
          },
          {
            title: "Wetter App",
            description: "Eine Wettervorhersage-App mit einer Open-Weather-API.",
            link: "https://github.com/orhan-yilmaz/weather-app"
          }
        ]
      },
      contact: {
        title: "Kontakt",
        name: "Name",
        namePlaceholder: "Geben Sie Ihren Namen ein",
        email: "E-Mail",
        emailPlaceholder: "Geben Sie Ihre E-Mail ein",
        message: "Nachricht",
        messagePlaceholder: "Schreiben Sie Ihre Nachricht",
        submit: "Nachricht senden",
        alert: "Ihre Nachricht wurde gesendet (Demo-Hinweis)."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
