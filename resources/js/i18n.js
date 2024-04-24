import Backend from "i18next-http-backend";

// Translation using i18next-React -----

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

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
