import "./bootstrap";
import "./credits";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import AOS from "aos";
import "aos/dist/aos.css";
import { interpolate } from "framer-motion";
import "./i18n";

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
