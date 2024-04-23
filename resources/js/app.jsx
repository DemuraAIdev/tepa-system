import "./bootstrap";
import "./credits";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import AOS from "aos";
import "aos/dist/aos.css";

import global_id from "../translations/id/global.json";
import global_en from "../translations/en/global.json";
import i18next from "i18next";
import { interpolate } from "framer-motion";

// Translation using i18next-React -----

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    rescources: {
        en: {
            global: global_en,
        },
        es: {
            global: global_id,
        },
    },
});

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

AOS.init();
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4f46e5",
    },
});
