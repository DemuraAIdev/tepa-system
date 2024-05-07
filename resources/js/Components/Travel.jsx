import { motion } from "framer-motion";
// Trannslation
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
            id="travel"
            className=" bg-[url(/Image/TravelBg.svg)] bg-center bg-cover "
        >
            <div className="bg-base-100 flex md:flex-row flex-col items-center justify-center font-body min-h-fit md:pt-7 md:pb-4 w-full ">
                <motion.div
                    className="flex flex-col gap-5 md:w-[50%] p-7 lg:ml-[5em] order-2 md:order-1"
                    variants={items}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                    }}
                >
                    <h1 className="text-4xl font-body font-bold text-indigo-500">
                        {t("travel.title")}
                    </h1>
                    <p className="text-justify ">{t("travel.description")}</p>
                </motion.div>

                <motion.div
                    className="p-7 lg:mr-[5em] md:w-[50%] order-1 md:order-2"
                    variants={items2}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                    }}
                >
                    <img
                        src={"/Image/landing/travel.webp"}
                        alt="Tavel-Image-1"
                        className="rounded-md w-fit shadow-cstm"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Travel;
