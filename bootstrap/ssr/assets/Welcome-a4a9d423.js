import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { FaFacebookF, FaInstagram, FaYoutube, FaAnglesDown, FaMoon, FaSun, FaBarsStaggered } from "react-icons/fa6/index.esm.js";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import VanillaTilt$1 from "vanilla-tilt";
import { Link as Link$1, Head } from "@inertiajs/react";
import { B as BrandLogo } from "./BrandLogo-c0dd44e2.js";
import { B as Brand } from "./Brand-867fe532.js";
import { themeChange } from "theme-change";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./Logo-82b068c2.js";
const items$3 = {
  hidden: {
    opaciity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};
const items2$3 = {
  hidden: {
    opaciity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};
const items3$1 = {
  hidden: {
    opaciity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const Hero = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 0.1
    });
  });
  const el = React.useRef(null);
  const { t, i18n } = useTranslation(["global"]);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        t("typed.one"),
        t("typed.two"),
        t("typed.three")
      ],
      typeSpeed: 50,
      smartBackspace: true,
      backDelay: 3500,
      loop: Infinity
    });
    return () => {
      typed.destroy();
    };
  }, [i18n.language]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 md:w-[50%] p-7 lg:ml-[5em] order-2 md:order-1  rounded-lg", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-body font-bold text-indigo-500", children: /* @__PURE__ */ jsx("span", { ref: el }) }),
    /* @__PURE__ */ jsx("p", { className: "text-justify ", children: t("header.description") }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "cards",
        spy: true,
        smooth: true,
        href: "#cards",
        offset: -150,
        duration: 500,
        children: /* @__PURE__ */ jsx("button", { className: "btn border-indigo-500 text-white hover:text-white font-bold bg-indigo-600 hover:scale-[1.05] ", children: t("header.button") })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "w-fit flex gap-4", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.facebook.com/Smkn1KotaBengkulu/?locale=id_ID",
          "aria-label": "fesfsefesf",
          className: "whitespace-no-wrap overflow-hidden",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "text-sm text-white rounded-full bg-indigo-600 p-2",
              variants: items$3,
              initial: "hidden",
              animate: "show",
              children: /* @__PURE__ */ jsx(FaFacebookF, {})
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.instagram.com/smkn1kotabengkulu/",
          "aria-label": "fesfsefesf",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "text-sm text-white rounded-full bg-pink-600 p-2",
              variants: items2$3,
              initial: "hidden",
              animate: "show",
              children: /* @__PURE__ */ jsx(FaInstagram, {})
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.youtube.com/channel/UCydN3u2tCciDrJKo06ug-oQ",
          "aria-label": "fesfsefesf",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "text-sm text-white rounded-full bg-red-600 p-2 hover:scale-50",
              variants: items3$1,
              initial: "hidden",
              animate: "show",
              children: /* @__PURE__ */ jsx(FaYoutube, {})
            }
          )
        }
      )
    ] })
  ] });
};
const Hero$1 = Hero;
const TheCard = () => {
  const { t, i18n } = useTranslation(["global"]);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "bg-[url(/Image/CardBg.svg)] h-[14em] w-[20em] p-4 flex items-start justify-center flex-col rounded-lg gap-2", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl text-gray-100 font-heading font-semibold", children: t("card_selection.card_one") }),
    /* @__PURE__ */ jsx("p", { className: " text-gray-200 font-heading text-sm", children: t("card_selection.card_one_subtitle") })
  ] }) });
};
const TheCardSecond = () => {
  const { t, i18n } = useTranslation(["global"]);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "bg-[url(/Image/CardBg.svg)] h-[14em] w-[20em] p-4 flex items-start justify-center flex-col rounded-lg gap-2", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl text-gray-100 font-heading font-semibold", children: t("card_selection.card_two") }),
    /* @__PURE__ */ jsx("p", { className: " text-gray-200 font-heading text-sm", children: t("card_selection.card_two_subtitle") })
  ] }) });
};
const TheCardThird = () => {
  const { t, i18n } = useTranslation(["global"]);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "bg-[url(/Image/CardBg.svg)] h-[14em] w-[20em] p-4 flex items-start justify-center flex-col rounded-lg gap-2", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl text-gray-100 font-heading font-semibold", children: t("card_selection.card_three") }),
    /* @__PURE__ */ jsx("p", { className: " text-gray-200 font-heading text-sm", children: t("card_selection.card_three_subtitle") })
  ] }) });
};
const variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};
const items$2 = {
  hidden: {
    opaciity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};
const items2$2 = {
  hidden: {
    opaciity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const items3 = {
  hidden: {
    opaciity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};
const CardSection = () => {
  const { t, i18n } = useTranslation(["global"]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "cards",
      className: "w-full h-full flex flex-col items-center justify-center bg-[url(/Image/CardSectionBg.svg)] py-7 gap-10",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "pb-7 px-4 md:px-0", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-white text-xl md:text-3xl lg:text-3xl font-heading font-semibold text-center px-4", children: [
            t("card_selection.title"),
            /* @__PURE__ */ jsx("br", {}),
            t("card_selection.second_title")
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-center pt-2 text-gray-300", children: [
            t("card_selection.subtitle"),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "min-h-[20vh] grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-7",
            variants,
            initial: "hidden",
            whileInView: "show",
            viewport: {
              once: true
            },
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  variants: items$2,
                  initial: "hidden",
                  whileInView: "show",
                  viewport: {
                    once: true
                  },
                  children: /* @__PURE__ */ jsx(TheCard, {})
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  variants: items2$2,
                  initial: "hidden",
                  whileInView: "show",
                  viewport: {
                    once: true
                  },
                  children: /* @__PURE__ */ jsx(TheCardSecond, {})
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  variants: items3,
                  initial: "hidden",
                  whileInView: "show",
                  viewport: {
                    once: true
                  },
                  children: /* @__PURE__ */ jsx(TheCardThird, {})
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-4xl p-4 flex items-center justify-center text-indigo-300", children: /* @__PURE__ */ jsx(FaAnglesDown, {}) })
      ]
    }
  );
};
const CardSection$1 = CardSection;
const items$1 = {
  hidden: {
    opaciity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const items2$1 = {
  hidden: {
    opaciity: 0,
    y: 150
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const Travel$1 = () => {
  const { t, i18n } = useTranslation(["global"]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "travel",
      className: " bg-[url(/Image/TravelBg.svg)] bg-center bg-cover ",
      children: /* @__PURE__ */ jsxs("div", { className: "bg-base-100 flex md:flex-row flex-col items-center justify-center font-body min-h-fit md:pt-7 md:pb-4 w-full ", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "flex flex-col gap-5 md:w-[50%] p-7 lg:ml-[5em] order-2 md:order-1",
            variants: items$1,
            initial: "hidden",
            whileInView: "show",
            viewport: {
              once: true
            },
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-4xl font-body font-bold text-indigo-500", children: t("travel.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-justify ", children: t("travel.description") })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "p-7 lg:mr-[5em] md:w-[50%] order-1 md:order-2",
            variants: items2$1,
            initial: "hidden",
            whileInView: "show",
            viewport: {
              once: true
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/Image/landing/travel.webp",
                alt: "Tavel-Image-1",
                className: "rounded-md w-fit shadow-cstm"
              }
            )
          }
        )
      ] })
    }
  );
};
const Travel$2 = Travel$1;
const items = {
  hidden: {
    opaciity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const items2 = {
  hidden: {
    opaciity: 0,
    y: 150
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const Travel = () => {
  const { t, i18n } = useTranslation(["global"]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "minibank",
      className: " min-h-fit w-full flex md:flex-row flex-col items-center justify-center md:pb-7 md:pt-4 font-body",
      children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "flex flex-col gap-5 md:w-[50%] p-7 lg:mr-[5em] md:order-2 order-2",
            variants: items,
            initial: "hidden",
            whileInView: "show",
            viewport: {
              once: true
            },
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-4xl font-body font-bold text-indigo-500", children: t("mini_bank.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-justify ", children: t("mini_bank.subtitle") })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "p-7 lg:ml-[5em] md:w-[50%] md-order-1 order-1",
            variants: items2,
            initial: "hidden",
            whileInView: "show",
            viewport: {
              once: true
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/Image/landing/bank.webp",
                alt: "Tavel-Image-1",
                className: "rounded-md w-fit shadow-cstm"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", {})
      ]
    }
  );
};
const MiniBank = Travel;
const BestItems = ({ name, type, price, img }) => {
  useEffect(() => {
    VanillaTilt$1.init(document.querySelectorAll(".card"), {
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 0.1
    });
  });
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md m-[1em] bg-gray-100 shadow-cstm2 rounded-xl overflow-hidden md:max-w-2xl", children: [
    /* @__PURE__ */ jsx(Link$1, { href: "/supplies", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: `/Image/items/${img}`,
        className: "rounded-t-md max-h-[200px] min-w-[270px]",
        alt: name
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-gray-800 mb-2", children: price.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 overflow-ellipsis overflow-hidden", children: name })
    ] })
  ] });
};
const BestItemsSection = ({ item }) => {
  const { t, i18n } = useTranslation(["global"]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-full flex flex-col items-center justify-center bg-[url(/Image/CardSectionBg.svg)] py-7 md:px-4 gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "pb-7 px-4 md:px-0", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-white text-xl md:text-3xl lg:text-3xl font-heading font-semibold text-center px-4", children: [
        t("best_item.title"),
        /* @__PURE__ */ jsx("br", {}),
        t("best_item.title_two")
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center pt-2 text-gray-300", children: t("best_item.subtitle") })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: " w-full min-h-screen grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center ", children: item.map((item2, index) => /* @__PURE__ */ jsx("li", { className: "list-none", children: /* @__PURE__ */ jsx("div", { "data-aos": "fade-up", "data-aos-duration": "100", children: /* @__PURE__ */ jsx(
      BestItems,
      {
        name: item2.name,
        type: item2.jenis,
        price: item2.harga,
        img: item2.image_url
      }
    ) }) }, index)) }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Link$1,
      {
        href: "/supplies",
        className: "btn bg-indigo-700 text-white hover:bg-indigo-600 hover:scale-[1.05]",
        children: t("best_item.button")
      }
    ) })
  ] });
};
const BestItemsSection$1 = BestItemsSection;
const FaqSection = () => {
  const { t, i18n } = useTranslation(["global"]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-[80vh]  flex flex-col items-center justify-evenly p-7", children: [
    /* @__PURE__ */ jsxs("div", { className: "pb-7", "data-aos": "fade-up", "data-aos-duration": "300", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-heading font-bold text-center ", children: "FAQ" }),
      /* @__PURE__ */ jsxs("p", { className: "text-md md:text-md font-heading font-medium pt-4  text-center", children: [
        "Frequently Asked Questions",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "", children: t("faq.title") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "join join-vertical md:w-[50%] flex gap-1",
        "data-aos": "flip-up",
        "data-aos-duration": "700",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "collapse collapse-arrow  border-[1px] border-gray-400", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                name: "my-accordion-1",
                "aria-label": "ac2"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "collapse-title text-xl  font-body font-semibold", children: t("faq.q1") }),
            /* @__PURE__ */ jsx("div", { className: "collapse-content", children: /* @__PURE__ */ jsx("p", { className: "", children: t("faq.a1") }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "collapse collapse-arrow  border-[1px] border-gray-400", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                name: "my-accordion-1",
                "aria-label": "ac22"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "collapse-title text-xl  font-body font-semibold", children: t("faq.q2") }),
            /* @__PURE__ */ jsx("div", { className: "collapse-content", children: /* @__PURE__ */ jsx("p", { className: "", children: t("faq.a2") }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "collapse collapse-arrow  border-[1px] border-gray-400", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                name: "my-accordion-1",
                "aria-label": "ac232"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "collapse-title text-xl t font-body font-semibold", children: t("faq.q3") }),
            /* @__PURE__ */ jsx("div", { className: "collapse-content", children: /* @__PURE__ */ jsx("p", { className: "", children: t("faq.a3") }) })
          ] })
        ]
      }
    )
  ] });
};
const FaqSection$1 = FaqSection;
const footer = () => {
  return /* @__PURE__ */ jsxs("div", { className: "p-7 w-full bg-[url(/Image/CardSectionBg.svg)] bg-cover bg-center text-gray-200", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-center justify-center", children: [
      /* @__PURE__ */ jsx(BrandLogo, {}),
      /* @__PURE__ */ jsxs("h1", { className: "font-heading text-center font-semibold text-xl", children: [
        "SMKN 1 Bengkulu City ",
        /* @__PURE__ */ jsx("br", {}),
        "Raflesia Technopark"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "border-t-[1px] mt-5 pt-5 border-indigo-200", children: "Copyright SMKN 1 Kota Bengkulu © 2023 - All right reserved" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex pl-7", children: /* @__PURE__ */ jsx("a", { href: "/dev", className: " tooltip", "data-tip": "https://url/dev", children: /* @__PURE__ */ jsx("button", { className: "h-[30px] w-[30px] bg-indigo-950 rounded-md", children: "▪" }) }) }) })
  ] });
};
const Footer = footer;
function Navbar() {
  let [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    themeChange(false);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "bg-base-100 md:backdrop-blur-xl text-base-content sticky top-0 z-30 flex h-16 w-full justify-center  transition-shadow duration-100 \n  shadow-sm px-7 md:px-[7.5em]",
      children: /* @__PURE__ */ jsxs("nav", { className: "navbar w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 ", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-3xl text-indigo-700 mr-1", children: /* @__PURE__ */ jsx(Brand, {}) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => changeLanguage(i18n.language === "en" ? "id" : "en"),
              className: "btn btn-ghost",
              children: i18n.language.toUpperCase()
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-none", children: [
          /* @__PURE__ */ jsxs("ul", { className: "menu menu-horizontal px-1 hidden lg:flex md:static", children: [
            /* @__PURE__ */ jsx("li", { className: "md:ml-8 md:my-0 my-7 text-base font-body", children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "home",
                href: "#home",
                smooth: false,
                offset: -500,
                duration: 500,
                className: "text-body  hover:text-indigo-500 transition duration-300 font-normal",
                children: "Home"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "md:ml-8 md:my-0 my-7 text-base font-body", children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "travel",
                href: "#travel",
                smooth: true,
                offset: -20,
                duration: 500,
                className: "text-body  hover:text-indigo-500 transition duration-300 font-normal",
                children: "K-One Travel"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "md:ml-8 md:my-0 my-7 text-base font-body", children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "minibank",
                href: "#minibank",
                smooth: true,
                offset: -150,
                duration: 500,
                className: "text-body  hover:text-indigo-500 transition duration-300 font-normal",
                children: "Mini Bank"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "md:ml-8 md:my-0 my-7 text-base font-body light:text-gray-800 hover:text-indigo-500 ", children: /* @__PURE__ */ jsx(
              Link$1,
              {
                href: route("supplies"),
                className: "md:border-2 md:border-gray-800 md:py-2 md:px-4 md:rounded-xl md:overflow-hidden md:hover:bg-indigo-500 md:hover:border-indigo-500 md:hover:text-gray-200 transition-all duration-300",
                children: "Supplies"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "md:ml-8 md:my-0 my-7 text-sm font-body light:text-gray-800 hover:text-indigo-500 ", children: /* @__PURE__ */ jsxs("label", { className: "swap swap-rotate", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  "data-toggle-theme": "dark,light"
                }
              ),
              /* @__PURE__ */ jsx(FaMoon, { className: "swap-on fill-current h-7" }),
              /* @__PURE__ */ jsx(FaSun, { className: "swap-off fill-current h-7" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              onClick: () => setOpen(!open),
              className: "text-xl absolute right-8 top-6 cursor-pointer lg:hidden",
              children: /* @__PURE__ */ jsx(FaBarsStaggered, { name: "{open ? 'close':'menu'}" })
            }
          ),
          /* @__PURE__ */ jsxs(
            "ul",
            {
              className: `lg:hidden cursor-pointer  lg:items-center md:pb-0 pb-12 lg:static z-[100] left-0 w-full lg:w-auto lg:pl-auto pl-9 transition-all duration 500 ease-in-out absolute  ${open ? "top-16 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  bg-base-100" : "top-[-100vh]"}`,
              children: [
                /* @__PURE__ */ jsx("li", { className: "lg:ml-8 lg:my-0 my-7 text-base font-body", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "home",
                    href: "#home",
                    spy: true,
                    smooth: true,
                    offset: -500,
                    duration: 500,
                    className: "text-body  hover:text-indigo-500 transition duration-300 font-normal",
                    children: "Home"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { className: "lg:ml-8 lg:my-0 my-7 text-base font-body", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "travel",
                    href: "#travel",
                    spy: true,
                    smooth: true,
                    offset: -20,
                    duration: 500,
                    className: "text-body  hover:text-indigo-500 transition duration-300 font-normal",
                    children: "K-One Travel"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { className: "lg:ml-8 lg:my-0 my-7 text-base font-body", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "minibank",
                    href: "#minibank",
                    spy: true,
                    smooth: true,
                    offset: -150,
                    duration: 500,
                    className: "text-body  hover:text-indigo-500 transition duration-300 font-normal",
                    children: "Mini Bank"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { className: "lg:ml-8 lg:my-0 my-7 text-base font-body light:text-gray-800 hover:text-indigo-500 ", children: /* @__PURE__ */ jsx(
                  Link$1,
                  {
                    href: route("supplies"),
                    className: "lg:border-2 lg:border-gray-800 lg:py-2 lg:px-4 lg:rounded-xl lg:overflow-hidden lg:hover:bg-indigo-500 lg:hover:border-indigo-500 lg:hover:text-gray-200 transition-all duration-300",
                    children: "Supplies"
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { className: "lg:ml-8 lg:my-0 my-7 text-base font-body light:text-gray-800 hover:text-indigo-500 ", children: /* @__PURE__ */ jsxs("label", { className: "swap swap-rotate", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-toggle-theme": "dark,light"
                    }
                  ),
                  /* @__PURE__ */ jsx(FaMoon, { className: "swap-on fill-current h-7" }),
                  /* @__PURE__ */ jsx(FaSun, { className: "swap-off fill-current h-7" })
                ] }) })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function Tepad(props) {
  const { nodes, materials } = useGLTF("/3d/RILLJADI.gltf");
  const texture = useTexture("/3d/BAKED.png");
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture
  });
  return /* @__PURE__ */ jsxs("group", { ...props, dispose: null, scale: 0.2, children: [
    /* @__PURE__ */ jsx("mesh", { name: "Plane001", geometry: nodes.Plane001.geometry, material: textureMaterial, position: [0, 0.255, -0.529] }),
    /* @__PURE__ */ jsx("mesh", { name: "Green_Pillar", geometry: nodes.Green_Pillar.geometry, material: textureMaterial, position: [7.109, 2.22, 2.868] }),
    /* @__PURE__ */ jsx("mesh", { name: "Green_Pillar001", geometry: nodes.Green_Pillar001.geometry, material: textureMaterial, position: [7.109, 6.455, 2.641] }),
    /* @__PURE__ */ jsx("mesh", { name: "Tepa", geometry: nodes.Tepa.geometry, material: textureMaterial, position: [-1.873, 3.611, 2.697], rotation: [Math.PI / 2, 0, 0] }),
    /* @__PURE__ */ jsx("mesh", { name: "Tepa001", geometry: nodes.Tepa001.geometry, material: textureMaterial, position: [3.665, 3.738, 2.697], rotation: [Math.PI / 2, 0, 0] }),
    /* @__PURE__ */ jsx("mesh", { name: "Tepa002", geometry: nodes.Tepa002.geometry, material: textureMaterial, position: [4.29, 3.611, 2.697], rotation: [Math.PI / 2, 0, 0] }),
    /* @__PURE__ */ jsx("mesh", { name: "Cube003", geometry: nodes.Cube003.geometry, material: textureMaterial, position: [-0.055, 3.28, 2.051] }),
    /* @__PURE__ */ jsx("mesh", { name: "Plane002", geometry: nodes.Plane002.geometry, material: textureMaterial, position: [-0.027, 1.716, 2.976], rotation: [Math.PI / 2, 0, 0] }),
    /* @__PURE__ */ jsx("mesh", { name: "Plane003", geometry: nodes.Plane003.geometry, material: textureMaterial, position: [0, 0.255, -0.549] }),
    /* @__PURE__ */ jsx("mesh", { name: "Plane004", geometry: nodes.Plane004.geometry, material: textureMaterial, position: [4e-3, 6.826, 2.645], rotation: [Math.PI / 2, 0, 0] }),
    /* @__PURE__ */ jsx("mesh", { name: "Plane005", geometry: nodes.Plane005.geometry, material: textureMaterial, position: [-5.027, 6.826, 2.645], rotation: [Math.PI / 2, 0, 0] }),
    /* @__PURE__ */ jsx("mesh", { name: "Plane006", geometry: nodes.Plane006.geometry, material: textureMaterial, position: [4.985, 6.826, 2.645], rotation: [Math.PI / 2, 0, 0] }),
    /* @__PURE__ */ jsx("mesh", { name: "Circle", geometry: nodes.Circle.geometry, material: textureMaterial, position: [1.822, 5.004, 2.917], rotation: [Math.PI / 2, 0.301, 0], scale: 1.006 }),
    /* @__PURE__ */ jsx("mesh", { name: "Circle001", geometry: nodes.Circle001.geometry, material: textureMaterial, position: [6.031, 4.976, 3.009], rotation: [Math.PI / 2, -0.449, 0] }),
    /* @__PURE__ */ jsx("mesh", { name: "Circle002", geometry: nodes.Circle002.geometry, material: textureMaterial, position: [-4.004, 4.976, 3.009], rotation: [Math.PI / 2, -0.449, 0] }),
    /* @__PURE__ */ jsx("mesh", { name: "Cube004", geometry: nodes.Cube004.geometry, material: textureMaterial, position: [9.613, 3.909, -1.237] }),
    /* @__PURE__ */ jsx("mesh", { name: "Cube008", geometry: nodes.Cube008.geometry, material: textureMaterial, position: [9.613, 3.909, -1.237] }),
    /* @__PURE__ */ jsx("mesh", { name: "Cube001", geometry: nodes.Cube001.geometry, material: textureMaterial, position: [0, 9.639, -0.43] }),
    /* @__PURE__ */ jsx("mesh", { name: "Cube002", geometry: nodes.Cube002.geometry, material: textureMaterial, position: [0, 3.554, -2.07] }),
    /* @__PURE__ */ jsx("mesh", { name: "AC", geometry: nodes.AC.geometry, material: textureMaterial, position: [-3.57, 4.882, 2.097] }),
    /* @__PURE__ */ jsx("mesh", { name: "AC001", geometry: nodes.AC001.geometry, material: textureMaterial, position: [6.43, 4.882, 2.097] }),
    /* @__PURE__ */ jsx("mesh", { name: "AC002", geometry: nodes.AC002.geometry, material: textureMaterial, position: [2.23, 4.882, 2.097] }),
    /* @__PURE__ */ jsx("mesh", { name: "Plane", geometry: nodes.Plane.geometry, material: textureMaterial })
  ] });
}
useGLTF.preload("/3d/RILLJADI.gltf");
function MyThree() {
  return /* @__PURE__ */ jsx("div", { className: "h-full md:h-screen", children: /* @__PURE__ */ jsx("div", { className: "md:h-full ", children: /* @__PURE__ */ jsxs(Canvas, { children: [
    /* @__PURE__ */ jsx("ambientLight", { intensity: 5 }),
    /* @__PURE__ */ jsx(OrbitControls, { enableZoom: false }),
    /* @__PURE__ */ jsx(Tepad, {})
  ] }) }) });
}
function Welcome({ items: items4 }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "home",
        className: "md:bg-[url(/Image/HomeWaveStacked.svg)] bg-no-repeat lg:bg-bottom bg-center bg-cover min-h-screen w-full ",
        children: /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-base-100 ", children: [
          /* @__PURE__ */ jsx(Hero$1, {}),
          /* @__PURE__ */ jsxs("div", { className: "p-7 lg:mr-[5em] md:w-[50%] order-1 md:order-2 ", children: [
            /* @__PURE__ */ jsx("div", { className: "md:block hidden", children: /* @__PURE__ */ jsx(MyThree, {}) }),
            /* @__PURE__ */ jsx("div", { className: "md:hidden block", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/Image/Hero.webp",
                alt: "Hero-Image",
                className: "rounded-md w-fit shadow-cstm "
              }
            ) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(CardSection$1, {}),
    /* @__PURE__ */ jsx(Travel$2, {}),
    /* @__PURE__ */ jsx(MiniBank, {}),
    /* @__PURE__ */ jsx(BestItemsSection$1, { item: items4 }),
    /* @__PURE__ */ jsx(FaqSection$1, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Welcome as default
};
