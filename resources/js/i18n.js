import Backend from "i18next-http-backend";

// Translation using i18next-React -----

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            welcome:
                "Technopark, our school's multifunctional resource center, is dedicated to providing a seamless and enhanced school experience. From high-quality uniforms and comprehensive office supplies to electronics and efficient fee payment through the mini bank, along with photocopy services and expert educational travel planning, Tec   hnopark is your one-stop destination for academic and administrative support, aiming to elevate every aspect of your school journey.",
        },
    },
    id: {
        translation: {
            welcome: "ini indo",
        },
    },
};

i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: "./lang/{{lng}}/{{ns}}.json",
        },
        lng: "en",
    });

export default i18next;
