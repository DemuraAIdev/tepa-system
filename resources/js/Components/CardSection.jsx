import TheCard from "./TheCard";
import TheCardSecond from "./TheCardSecond";
import TheCardThird from "./TheCardThird";
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";
// Translation
import { useTranslation } from "react-i18next";

const variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const items = {
    hidden: {
        opaciity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        },
    },
};
const items2 = {
    hidden: {
        opaciity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};
const items3 = {
    hidden: {
        opaciity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
        },
    },
};

const CardSection = () => {
    // Translation
    const { t, i18n } = useTranslation(["global"]);
    return (
        <div
            id="cards"
            className="w-full h-full flex flex-col items-center justify-center bg-[url(/Image/CardSectionBg.svg)] py-7 gap-10"
        >
            <div className="pb-7 px-4 md:px-0">
                <h1 className="text-white text-xl md:text-3xl lg:text-3xl font-heading font-semibold text-center px-4">
                    {t("card_selection.title")}
                    <br />
                    {t("card_selection.second_title")}
                </h1>
                <p className="text-center pt-2 text-gray-300">
                    {t("card_selection.subtitle")}{" "}
                </p>
            </div>
            <motion.div
                className="min-h-[20vh] grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-7"
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                }}
            >
                <motion.div
                    variants={items}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                    }}
                >
                    <TheCard />
                </motion.div>

                <motion.div
                    variants={items2}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                    }}
                >
                    <TheCardSecond />
                </motion.div>

                <motion.div
                    variants={items3}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                    }}
                >
                    <TheCardThird />
                </motion.div>
            </motion.div>
            <div className="text-4xl p-4 flex items-center justify-center text-indigo-300">
                <FaAnglesDown />
            </div>
        </div>
    );
};

export default CardSection;
