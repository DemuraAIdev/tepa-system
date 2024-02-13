import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { FaInstagram, FaYoutube, FaGlobe, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6/index.esm.js";
import { Head } from "@inertiajs/react";
const Dev = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dev" }),
    /* @__PURE__ */ jsx("div", { className: "p-7 min-h-screen flex w-full bg-[url(../Images/CardSectionBg.svg)] items-center justify-center ", children: /* @__PURE__ */ jsxs("div", { className: "lg:mx-[5em] md:mx-[2em] flex flex-col gap-10 p-7 backdrop-blur-xl bg-gray-900/30 border-[1px] border-gray-950 shadow-cstm2 rounded-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-center justify-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-gray-200 font-body font-semibold text-xl tracking-wider text-center", children: "Meet Our Dev Squad" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-body text-justify md:text-center", children: "Behind every feature and application we build, there‘s a passionate and dedicated team of developers committed to delivering the best possible experiences for you." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 grid-cols-1 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-3 md:order-1", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "image/avatar.png",
              className: "w-[6em] rounded-full"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "font-body font-semibold text-md text-gray-200 pt-2", children: "Aida Silva M" }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold font-body py-2 text-sm text-gray-400", children: "System Designer" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-body text-center italic", children: `"You can cry and scream but don't give up."` }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: "flex gap-4 p-2", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://instagram.com/ads_mhydn?igshid=ZW45Y3ozYWZ2bGhu", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaInstagram, {}) }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-1 md:order-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "image/avatar.png",
              className: "w-[6em] rounded-full"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "font-body font-semibold text-md text-gray-200 pt-2", children: "Haekal Abdillah Ramadhan" }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold font-body py-2 text-sm text-gray-400", children: "Lead/Front-End" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-body text-center italic", children: '"You only live once, but if you do it right, once is enough."' }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "flex gap-4 p-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/haekal.a.r/", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaInstagram, {}) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/channel/UCj1iYTxSafuX4fzlTxwgG9g", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaYoutube, {}) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://cielhollow.tech", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaGlobe, {}) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-2 md:order-3", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "image/avatar.png",
              className: "w-[6em] rounded-full"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "font-body font-semibold text-md text-gray-200 pt-2", children: "Abdul Vaiz Vahry Iskandar" }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold font-body py-2 text-sm text-gray-400", children: "Back-End" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-body text-center italic", children: '"Your determination is the spark that ignites your success."' }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "flex gap-4 p-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/DemuraAIdev/", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaGithub, {}) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/abdul-vaiz-vi", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaLinkedin, {}) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://vahryiskandar.my.id/", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaGlobe, {}) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-4", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "image/avatar.png",
              className: "w-[6em] rounded-full"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "font-body font-semibold text-md text-gray-200 pt-2", children: "M Alif Dwi Saputra" }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold font-body py-2 text-sm text-gray-400", children: "Documentation Specialist" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-body text-center italic", children: '"Tap Confidence in the Online World."' }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "flex gap-4 p-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaFacebook, {}) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaInstagram, {}) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaGlobe, {}) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-5", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "image/avatar.png",
              className: "w-[6em] rounded-full"
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "font-body font-semibold text-md text-gray-200 pt-2", children: "Allysa Rania S" }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold font-body py-2 text-sm text-gray-400", children: "System Designer" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-body text-center italic", children: `"i'm pretty, pretty depressed"` }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: "flex gap-4 p-2", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://instagram.com/allysarania?igshid=MWJhdDFtcGxxY3Bybg", rel: "noopener noreferrer", className: "text-indigo-600 text-xl", children: /* @__PURE__ */ jsx(FaInstagram, {}) }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-7", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-gray-200 font-body font-semibold text-xl tracking-wider text-center", children: "About System" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center  flex-col", children: /* @__PURE__ */ jsx("div", { className: "border-gray-500 border-[1px] p-7 rounded-br-3xl rounded-tl-3xl", children: /* @__PURE__ */ jsx("img", { src: "/w.png", width: 250, alt: "" }) }) }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-300 font-body text-justify", children: [
          "Our system is built on a robust stack, with ",
          /* @__PURE__ */ jsx("a", { className: "text-red-500 hover:underline", href: "https://laravel.com/", children: "Laravel" }),
          " as the backend framework, ",
          /* @__PURE__ */ jsx("a", { href: "https://react.dev/", className: "text-blue-400 hover:underline", children: "ReactJS" }),
          " as the frontend framework, and ",
          /* @__PURE__ */ jsx("a", { href: "https://inertiajs.com/", className: "text-purple-400 hover:underline", children: "InertiaJS" }),
          " serving as the seamless bridge connecting the two. We've harnessed the power of ",
          /* @__PURE__ */ jsx("a", { href: "https://tailwindcss.com/", className: "text-sky-500 hover:underline", children: "TailwindCSS" }),
          " for a flexible and responsive UI. For bundling and managing dependencies, we rely on ",
          /* @__PURE__ */ jsx("a", { href: "https://vitejs.dev/", className: "hover:underline text-yellow-500", children: "Vite" }),
          ", which helps ensure fast and efficient development. Behind the scenes, we store and manage data using ",
          /* @__PURE__ */ jsx("a", { href: "https://www.mysql.com/", className: "text-[#3E6E93] hover:underline", children: "MySQL" }),
          ", a well-established and reliable database solution. To add a touch of creativity and flair to our user interface, we've integrated the React-Icon third-party library. With this tech-savvy infrastructure, we're dedicated to providing a modern and user-friendly system that leverages the latest technologies to deliver an exceptional user experience.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ISEKAI SYSTEM"
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Dev as default
};
