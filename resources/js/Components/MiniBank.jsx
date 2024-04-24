import { motion } from "framer-motion";
// Translation
import { useTranslation } from "react-i18next";

const items = {
    hidden: {
        opaciity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};
const items2 = {
    hidden: {
        opaciity: 0,
        y: 150,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const Travel = () => {
    // Translation
    const { t, i18n } = useTranslation(["global"]);
    return (
        <div
            id="minibank"
            className=" min-h-[80vh] w-full flex md:flex-row flex-col items-center justify-center font-body"
        >
            <motion.div
                className="flex flex-col gap-5 md:w-[50%] p-7 lg:mr-[5em] md:order-2 order-2"
                variants={items}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                }}
            >
                <h1 className="text-4xl font-body font-bold text-indigo-500">
                    {t("mini_bank.title")}
                </h1>
                <p className="text-justify text-gray-800">
                    {t("mini_bank.subtitle")}
                    {t("mini_bank.another_sub")}
                </p>
            </motion.div>

            <motion.div
                className="p-7 lg:ml-[5em] md:w-[50%] md-order-1 order-1"
                variants={items2}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                }}
            >
                <img
                    src={"/Image/landing/bank.webp"}
                    alt="Tavel-Image-1"
                    className="rounded-md w-fit shadow-cstm"
                />
            </motion.div>
            <div></div>
        </div>
    );
};

export default Travel;
